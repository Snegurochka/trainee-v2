import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../shared/services/hooks/redux";
import { selectIsAuth, selectUid, setAuth } from "../../../../entities/User";

export const useAuth = () => {
  const isAuth = useSelector(selectIsAuth);
  const uid = useSelector(selectUid);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || !uid) return;
    dispatch(setAuth(true));
  }, [dispatch, uid]);

  return {
    isAuth,
  };
};
