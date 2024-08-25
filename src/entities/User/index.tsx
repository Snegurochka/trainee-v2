import userReducer, {
  removeUser,
  setUser,
  setResult,
} from "./services/user-slice";
import { selectUid, selectCompleted } from "./services/user-selectors";
import { getUserInfo } from "./services/user-firebase";

import { UserCompletedAnswers } from "./components/UserCompletedAnswers";
import { UserAnswersTotal } from "./components/UserAnswersTotal";

export {
  userReducer,
  selectUid,
  removeUser,
  getUserInfo,
  setUser,
  UserCompletedAnswers,
  UserAnswersTotal,
  selectCompleted,
  setResult,
};
