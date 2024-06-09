import userReducer from "./services/user-slice";
import { selectIsAuth, selectUid } from "./services/user-selectors";
import { setAuth, removeUser, setUser } from "./services/user-slice";
import { getUserInfo } from "./services/user-firebase";

import { UserCompletedAnswers } from "./components/UserCompletedAnswers";

export {
  userReducer,
  selectIsAuth,
  selectUid,
  setAuth,
  removeUser,
  getUserInfo,
  setUser,
  UserCompletedAnswers
};
