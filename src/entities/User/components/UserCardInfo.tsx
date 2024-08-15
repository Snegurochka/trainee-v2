import { useTranslation } from "react-i18next";
import { TUser } from "../services/user-types";
import { Xp } from "../../../features/Xp";

export const UserCardInfo = ({ user }: { readonly user: TUser }) => {
  const { t } = useTranslation();
  return (
    <>
      <p>Email: {user.email}</p>
      <p>
        {t("Name")}: {user.name}
      </p>
      <p>
        {t("Level")}: {user.level}
      </p>
      <Xp />
      <p>
        {t("Completed")}: {user.completed.length}
      </p>
    </>
  );
};
