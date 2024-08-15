import {
  configureStore,
  combineReducers,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { userReducer } from "../../../entities/User";
import { answersReducer } from "../../../entities/Answers";
import { quizReducer } from "../../../entities/Quiz";
import { authReducer } from "../../../features/Auth";
import { xpReducer } from "../../../features/Xp";
import { challengeReducer } from "../../../features/Challenge";
import { router } from "../route/route";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  quiz: quizReducer,
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
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  extra: typeof extraArgument;
}>();
