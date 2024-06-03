import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { PostData } from "../types/posts";
import { db } from "../firebase/config";

function useCollection() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [posts, setPostsBy] = useState<PostData[]>([]);

  const loadData = (categories: string[]) => {
    setIsPending(true);
    setError(null);

    let _query;
    if (categories.includes("all")) {
      _query = query(collection(db, "posts"));
    } else {
      _query = query(collection(db, "posts"), where("categories", "array-contains-any", categories));
    }

    const unsubscribe = onSnapshot(
      _query,
      (snapshot) => {
        const posts: PostData[] = [];
        snapshot.forEach((doc) => {
          posts.push(doc.data() as PostData);
        });
        console.log(posts);
        setPostsBy(posts);
        setIsPending(false);
      },
      (error) => {
        console.error(error.message);
        setError(error.message);
        setIsPending(false);
      }
    );

    return unsubscribe;
  };

  return { posts, loadData, error, isPending };
}

export default useCollection;
