import { collection, getDocs, query, where } from "firebase/firestore";
import { CommentsDB, db,  } from "../../../app/services/firebase";
import { TComment } from "./comments-types";


const commentsCollection = collection(db, CommentsDB);

export const getComments = async (questionID: string) => {
  const q = query(commentsCollection, where("questionID", "==", questionID));
  const querySnapshot = await getDocs(q);
  const questions = [] as TComment[];

  querySnapshot.docs.forEach((doc) => {
    const data = doc.data() as TComment;
    questions.push({ ...data, idDoc: doc.id });
  });
  return questions;
};