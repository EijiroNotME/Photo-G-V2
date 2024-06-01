import { Timestamp } from "@firebase/firestore";



export type PostData = {
  authorID: string;
  authorName: string | null;
  title: string;
  description: string;
  categories: string[];
  imageURL: string;
  datePosted: Timestamp;
};
