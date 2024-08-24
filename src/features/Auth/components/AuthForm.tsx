import { useForm } from "react-hook-form";
import { Button } from "../../../shared/UI/Button/Button";
import { Input } from "../../../shared/UI/Form/Input";
import { useAppDispatch } from "../../../shared/services/hooks/redux";
import { setApiAuth } from "../services/auth-api";
import { Card } from "../../../shared/UI/Card/Card";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export type TAuthForm = {
  email: string;
  password: string;
};

export const AuthForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TAuthForm>();

  const submitHandler = (data: TAuthForm) => {
    dispatch(setApiAuth(data)).then(() => navigate("/"));
  };
  return (
    <Card $m={3} title={t("Login")}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Input {...register("email", { required: true })} label="Email" />
        {errors.email && <p>This field is required</p>}
        <Input
          {...register("password", { required: true })}
          label="Password"
          type="password"
        />
        {errors.password && <p>This field is required</p>}
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading..." : "Login"}
        </Button>
      </form>
    </Card>
  );
};
