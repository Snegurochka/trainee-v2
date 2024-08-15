import { useCallback } from "react";
import { useAppDispatch } from "../../../../shared/services/hooks/redux";
import {
  removeUser,
} from "../../../../entities/User";
import { setAuth } from "../auth-slice";

export const useLogin = () => {
  const dispatch = useAppDispatch();

  const logOut = useCallback(() => {
    dispatch(removeUser());
    dispatch(setAuth(false));
    localStorage.removeItem("token");
  }, [dispatch]);

 const initAuth = useCallback(() => {
    //const token = localStorage.getItem("token");
    
  }, [dispatch]);

  return {
    logOut,
    initAuth,
  };
};
