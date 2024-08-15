import { useTranslation } from "react-i18next";
import { TUser } from "../services/user-types";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../../shared/UI/Form/Input";
import { Xp } from "../../../features/Xp";

export const UserCardInfoEdit = ({ user }: { readonly user: TUser }) => {
  const { t } = useTranslation();
  const { control } = useForm();
  return (
    <form>
      <Controller
          name="email"
          control={control}
          render={({ field }) => <Input {...field} label="Email" />}
        />
      <Controller
          name="name"
          control={control}
          render={({ field }) => <Input {...field} label="Name" />}
        />
      <p>
        {t("Level")}: {user.level}
      </p>
      <Xp />
      <p>
        {t("Completed")}: {user.completed.length}
      </p>
    </form>
  );
};
