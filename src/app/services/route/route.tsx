import { createBrowserRouter } from "react-router-dom";
import {
  ABOUT_PATH,
  ACCOUNT_PATH,
  AUTH_PATH,
  HOME_PATH,
  QUIZ_PATH,
} from "./route-constants";
import { Layout } from "../../../shared/UI/Layout/Layout";
import { LayoutSidebar } from "../../../shared/UI/Layout/LayoutSidebar";
import HomePage from "../../../pages/HomePage/HomePage";
import { QuizPageAsync } from "../../../pages/QuizPage/QuizPage.async";
import { AccountPageAsync } from "../../../pages/AccountPage/AccountPage.async";
import AboutPage from "../../../pages/AboutPage/AboutPage";
import { AuthPageAsync } from "../../../pages/AuthPage/AuthPage.async";


export const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: AUTH_PATH, element: <AuthPageAsync /> },
      {
        path: QUIZ_PATH,
        element: <LayoutSidebar />,
        children: [
          { index: true, element: <QuizPageAsync /> },
          { path: ACCOUNT_PATH, element: <AccountPageAsync /> },
        ],
      },
      { path: "*", element: <div>Not found</div> },
      {
        path: ABOUT_PATH,
        element: <AboutPage />,
      },
    ],
  },

]);
