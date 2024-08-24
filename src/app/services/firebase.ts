import { initializeApp } from "firebase/app";
import {
  getFirestore,
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// DB names
export const UsersDB = "users";
export const ChallengesDB = "challenges";
export const QuestionsDB = "questions";
export const CommentsDB = "comments";

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);