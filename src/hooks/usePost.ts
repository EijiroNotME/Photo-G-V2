import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuth } from "../context/authContext";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp, Timestamp  } from "@firebase/firestore";
import { PostData } from "../types/posts";

function useUploadImage() {
  const { currentUser } = useAuth();

  const [errorPost, setErrorPost] = useState<string | null>(null);
  const [isPendingPost, setIsPendingPost] = useState<boolean>(false);
  const [imageURL, setImageURL] = useState<string | null>(null);

  const storage = getStorage();

  const addPost = async (
    title: string,
    description: string,
    categories: string[],
    file: File
  ) => {
    setErrorPost(null);
    setIsPendingPost(true);
    setImageURL(null);
    try {
      if (currentUser) {
        const timestamp = Date.now();
        const uniqueFileName = `${timestamp}-${file.name}`;
        const storageRef = ref(
          storage,
          `postImages/${currentUser.email}/${uniqueFileName}`
        );
        await uploadBytes(storageRef, file);
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

        await addDoc(collection(db, "posts"), postData);

        setImageURL(url);
        setIsPendingPost(false);
      }
    } catch (error: any) {
      console.error("Error uploading image:", error);
      setErrorPost(error.message);
      setIsPendingPost(false);
    }
  };

  return { errorPost, isPendingPost, imageURL, addPost };
}

export default useUploadImage;
