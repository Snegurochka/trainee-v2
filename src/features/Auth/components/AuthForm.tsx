import { useState, FormEvent } from "react";

import { useLogin } from "../services/hooks/use-login-hook";
import { Button } from "../../../shared/UI/Button/Button";
import { Input } from "../../../shared/UI/Form/Input";

export const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useLogin();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    logIn(email, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <p>
        <Input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <Button type="submit">
        Login
      </Button>
    </form>
  );
};
