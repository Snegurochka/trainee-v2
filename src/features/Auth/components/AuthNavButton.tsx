import { Link } from "react-router-dom";

import { useAuth } from "../services/hooks/use-auth-hook";
import { useLogin } from "../services/hooks/use-login-hook";
import { Button } from "../../../shared/UI/Button/Button";
import { AUTH_PATH } from "../../../app/services/route/route-constants";

export const AuthNavButton = () => {
  const { logOut } = useLogin();
  const { isAuth } = useAuth();

  if (isAuth) {
    return <Button onClick={logOut}>LogOut</Button>;
  }

  return (
    <Link to={AUTH_PATH}>
      <Button>Login</Button>
    </Link>
  );
};
