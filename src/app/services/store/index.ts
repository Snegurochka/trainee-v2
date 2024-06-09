import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "../../../entities/User";
import { answersReducer } from "../../../entities/Answers";
import { quizReducer } from "../../../entities/Quiz";

const rootReducer = combineReducers({
  user: userReducer,
  quiz: quizReducer,
  answers: answersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
