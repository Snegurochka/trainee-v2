import { collection, getDocs, query } from "firebase/firestore";
import { db, QuestionsDB } from "../../../app/services/firebase";
import { TQuestion } from "./questions-types";

const questionsCollection = collection(db, QuestionsDB);

export const getQuestions = async () => {
  const q = query(questionsCollection);
  const querySnapshot = await getDocs(q);
  const questions = [] as TQuestion[];

  querySnapshot.docs.forEach((doc) => {
    const data = doc.data() as TQuestion;
    questions.push({ ...data, idDoc: doc.id });
  });
  return questions;
};
