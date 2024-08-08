import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const authUser = async (email: string, password: string) => {
  const auth = getAuth();
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};
