import { useSelector } from "react-redux";
import { UserCompletedAnswers, selectIsAuth } from "../../entities/User";



const AccountPage = () => {
  const isAuth = useSelector(selectIsAuth);
  if (!isAuth) {
    return <div>Not authorized</div>;
  }
  return (
    <div>
      <h1>Account Page</h1>
      <UserCompletedAnswers />
    </div>
  );
};

export default AccountPage;
