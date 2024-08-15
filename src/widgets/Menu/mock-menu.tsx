import {
  ACCOUNT_PATH,
  HOME_PATH,
  QUESTIONS_PATH,
  QUIZ_PATH,
} from "../../app/services/route/route-constants";
import { HomeIcon } from "../../shared/UI/Icons/HomeIcon";
import { QuestionsIcon } from "../../shared/UI/Icons/QuestionsIcon";
import { QuizIcon } from "../../shared/UI/Icons/QuizIcon";
import { UserIcon } from "../../shared/UI/Icons/UserIcon";

export type TMenuItem = {
  name: string;
  path: string;
  authOnly?: boolean;
  icon?: JSX.Element;
};

export const menuList: TMenuItem[] = [
  {
    name: "Home",
    path: HOME_PATH,
    icon: <HomeIcon color="#fff"/>,
    authOnly: false,
  },
  {
    name: "Quiz",
    path: QUIZ_PATH,
    icon: <QuizIcon color="#fff" width="30"/>,
    authOnly: true,
  },
  {
    name: "Questions",
    path: QUESTIONS_PATH,
    icon: <QuestionsIcon color="#fff"/>,
    authOnly: true,
  },
  {
    name: "Account",
    path: ACCOUNT_PATH,
    icon: <UserIcon color="#fff"/>,
    authOnly: true,
  }
];
