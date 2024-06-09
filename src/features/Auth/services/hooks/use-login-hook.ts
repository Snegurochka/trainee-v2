import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../shared/services/hooks/redux";
import {
  removeUser,
  setAuth,
  setUser,
  getUserInfo,
} from "../../../../entities/User";
import { authUser } from "../auth-firebase";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = useCallback(() => {
    dispatch(removeUser());
    dispatch(setAuth(false));
    localStorage.removeItem("token");
  }, [dispatch]);

  const logIn = useCallback(
    async (email: string, password: string) => {
      const user = await authUser(email, password);
      const userData = await getUserInfo(user.uid);

      if (!userData) {
        return;
      }

      dispatch(setAuth(true));
      localStorage.setItem("token", user.refreshToken);

      dispatch(
        setUser({
          id: user.uid,
          email: user.email,
          name: userData.name,
          completed: userData.completed || [],
          level: userData.level || 0,
          xp: userData.xp || 0,
          token: user.refreshToken,
          idDoc: userData.idDoc,
        })
      );

      // TODO Challenge
      // const challenge = await getChallengeInfo(user.uid);
      // if (challenge) {
      //   dispatch(setChallenge({ ...challenge }));
      // }

      navigate("/");
    },
    [dispatch, navigate]
  );

  return {
    logOut,
    logIn,
  };
};
