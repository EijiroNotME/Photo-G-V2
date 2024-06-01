import { User } from "firebase/auth";
import { Timestamp } from "@firebase/firestore";

export type UserData = {
  displayName: string;
  photoURL: string;
  school: string;
  campus: string;
  course: string;
  email: string;
  created: Timestamp;
  lastLogin: Timestamp;
};

export interface AuthContextType {
  currentUser: User | null;
}
