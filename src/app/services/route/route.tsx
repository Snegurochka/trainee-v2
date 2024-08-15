import {
  ABOUT_PATH,
  ACCOUNT_PATH,
  AUTH_PATH,
  HOME_PATH,
  QUESTIONS_PATH,
  QUIZ_PATH,
} from "./route-constants";
import HomePage from "../../../pages/HomePage/HomePage";
import AboutPage from "../../../pages/AboutPage/AboutPage";
import AuthPage from "../../../pages/AuthPage/AuthPage";
import AccountPage from "../../../pages/AccountPage/AccountPage";
import QuizPage from "../../../pages/QuizPage/QuizPage";
import QuestionsPage from "../../../pages/QuestionsPage/QuestionsPage";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../../shared/UI/Layout/Layout";
import { AuthPageAsync } from "../../../pages/AuthPage/AuthPage.async";
import { QuizPageAsync } from "../../../pages/QuizPage/QuizPage.async";
import { AccountPageAsync } from "../../../pages/AccountPage/AccountPage.async";

export const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: AUTH_PATH, element: <AuthPageAsync /> },
      { path: QUIZ_PATH, element: <QuizPageAsync /> },
      { path: ACCOUNT_PATH, element: <AccountPageAsync /> },
      { path: QUESTIONS_PATH, element: <QuestionsPage /> },
      {
        path: ABOUT_PATH,
        element: <AboutPage />,
      },
      { path: "*", element: <div>Not found</div> },
    ],
  },
]);

export const routeConfig = {
  home: {
    path: HOME_PATH,
    element: <HomePage />,
    authOnly: false,
  },
  auth: {
    path: AUTH_PATH,
    element: <AuthPage />,
    authOnly: false,
  },
  about: {
    path: ABOUT_PATH,
    element: <AboutPage />,
    authOnly: false,
  },
  quiz: {
    path: QUIZ_PATH,
    element: <QuizPage />,
    authOnly: true,
  },
  account: {
    path: ACCOUNT_PATH,
    element: <AccountPage />,
    authOnly: true,
  },
  questions: {
    path: QUESTIONS_PATH,
    element: <QuestionsPage />,
    authOnly: true,
  },
};
