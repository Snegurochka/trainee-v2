import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../app/services/firebase";

export const authUser = async (email: string, password: string) => {
  const auth = getAuth(app);
  console.log('auth', auth);
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};
