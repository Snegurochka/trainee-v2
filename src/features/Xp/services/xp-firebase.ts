import { doc, updateDoc } from "firebase/firestore";
import { db, UsersDB } from "../../../app/services/firebase";

export const updateXp = async (idDoc: string, xp: number) => {
    updateDoc(doc(db, UsersDB, idDoc), {
      xp,
    });
  };
  