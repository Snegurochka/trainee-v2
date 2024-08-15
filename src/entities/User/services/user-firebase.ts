import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { UsersDB, db } from "../../../app/services/firebase";
import { IUserApi } from "./user-types";

const usersCollection = collection(db, UsersDB);
export const getUserInfo = async (id: string) => {
  const q = query(usersCollection, where("id", "==", id));
  const querySnapshot = await getDocs(q);
  const user = [] as IUserApi[];

  querySnapshot.docs.forEach((doc) => {
    const data = doc.data() as IUserApi;
    user.push({ ...data, idDoc: doc.id });
  });
  return user.at(0);
};
export const updateCompleted = async (idDoc: string, completed: number[]) => {
  updateDoc(doc(db, UsersDB, idDoc), {
    completed,
  });
};