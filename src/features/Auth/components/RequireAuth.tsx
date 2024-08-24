import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../shared/services/hooks/redux";
import { selectIsAuth } from "../services/auth-selectors";
import { AUTH_PATH } from "../../../app/services/route/route-constants";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAppSelector(selectIsAuth);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={AUTH_PATH} state={{ from: location }} replace />;
  }

  return children;
}
