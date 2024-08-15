import userReducer from "./services/user-slice";
import { selectUid } from "./services/user-selectors";
import { removeUser, setUser} from "./services/user-slice";
import { getUserInfo } from "./services/user-firebase";

import { UserCompletedAnswers } from "./components/UserCompletedAnswers";
import { UserAnswersTotal } from "./components/UserAnswersTotal"

export {
  userReducer,
  selectUid,
  removeUser,
  getUserInfo,
  setUser,
  UserCompletedAnswers,
  UserAnswersTotal
};
