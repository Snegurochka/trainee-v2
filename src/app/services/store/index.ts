import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import { router } from "../route/route";
import { userReducer } from "../../../entities/User";
import { answersReducer } from "../../../entities/Answers";
import { quizReducer } from "../../../entities/Quiz";
import { authReducer } from "../../../features/Auth";
import { xpReducer } from "../../../features/Xp";
import { challengeReducer } from "../../../features/Challenge";
import { questionsReducer } from "../../../entities/Questions";
import { commentsReducer } from "../../../features/Comments";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  quiz: quizReducer,
  questions: questionsReducer,
  comments: commentsReducer,
  answers: answersReducer,
  xp: xpReducer,
  challenge: challengeReducer,
});

const extraArgument = {
  router: router,
};

export const store = configureStore({
  reducer: rootReducer,

});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export interface ThunkConfig<T> {
  rejectValue: T;
  extra: typeof extraArgument;
}

