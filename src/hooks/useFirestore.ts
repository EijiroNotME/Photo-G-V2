import { useReducer, useCallback } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuth } from "../context/authContext";
import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  serverTimestamp,
  Timestamp,
  DocumentReference,
} from "@firebase/firestore";
import { PostData } from "../types/posts";
import imageCompression from "browser-image-compression";

interface State {
  document: DocumentReference | null;
  isPending: boolean;
  error: string | null;
  success: boolean | null;
}

type Action =
  | { type: "IS_PENDING" }
  | { type: "ERROR"; payload: string }
  | { type: "ADDED_DOCUMENT"; payload: DocumentReference }

const initialState: State = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "IS_PENDING":
      return { ...state, isPending: true, error: null, success: false };
    case "ERROR":
      return { ...state, isPending: false, error: action.payload, success: false };
    case "ADDED_DOCUMENT":
      return { ...state, isPending: false, document: action.payload, success: true, error: null };
    default:
      return state;
  }
};

const useFirestore = () => {
  const [state, dispatch] = useReducer(firestoreReducer, initialState);
  const storage = getStorage();
  const { currentUser } = useAuth();

  const compressImage = async (file: File, maxSizeMB = 0.5): Promise<File> => {
    const options = {
      maxSizeMB, 
      maxWidthOrHeight: 1920, 
      useWebWorker: true, 
    };

    try {
      const compressedFile = await imageCompression(file, options);
      return compressedFile;
    } catch (error) {
      console.error("Error during image compression:", error);
      throw error;
    }
  };

  const addPost = useCallback(
    async (title: string, description: string, categories: string[], file: File) => {
      dispatch({ type: "IS_PENDING" });

      try {
        if (currentUser) {
          const timestamp = Date.now();
          const uniqueFileName = `${timestamp}-${file.name}`;
          const storageRef = ref(storage, `postImages/${currentUser.email}/${uniqueFileName}`);
          const compressedFile = await compressImage(file, 0.5);
          await uploadBytes(storageRef, compressedFile);
          const url = await getDownloadURL(storageRef);

          const postData: PostData = {
            authorID: currentUser.uid,
            authorName: currentUser.displayName,
            title,
            description,
            categories,
            imageURL: url,
            datePosted: serverTimestamp() as Timestamp,
          };

          const docRef = await addDoc(collection(db, "posts"), postData);

          dispatch({ type: "ADDED_DOCUMENT", payload: docRef });
        }
      } catch (error: any) {
        dispatch({ type: "ERROR", payload: error.message });
      }
    },
    [currentUser, storage]
  );

  return { state, addPost };
};

export default useFirestore;
