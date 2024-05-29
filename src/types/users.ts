import { User } from "firebase/auth";

export type UserData = {
  firstName: string;
  lastName: string;
  school: string;
  campus: string;
  course: string;
  email: string;
};

export interface AuthContextType {
  currentUser: User | null;
}
