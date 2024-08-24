import { useTranslation } from "react-i18next";
import { UserCompletedAnswers } from "../../entities/User";
import { UserCard } from "../../entities/User/components/UserCard";

const AccountPage = () => {
  const { t } = useTranslation();
  return (
    <main>
      <h1>{t("Account Page")}</h1>
      <UserCard />
      <UserCompletedAnswers />
    </main>
  );
};

export default AccountPage;
