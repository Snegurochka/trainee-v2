import { useSelector } from "react-redux";
import { UserCompletedAnswers } from "../../entities/User";
import { selectIsAuth } from "../../features/Auth/services/auth-selectors";
import { UserCard } from "../../entities/User/components/UserCard";
import { useTranslation } from "react-i18next";

const AccountPage = () => {
  const isAuth = useSelector(selectIsAuth);
  const {t} = useTranslation();
  if (!isAuth) {
    return <div>Not authorized</div>;
  }
  return (
    <main>
      <h1>{t('Account Page')}</h1>
      <UserCard />
      <UserCompletedAnswers />
    </main>
  );
};

export default AccountPage;
