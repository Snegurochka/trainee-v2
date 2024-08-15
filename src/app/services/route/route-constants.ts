export const HOME_PATH = "/";
export const QUIZ_PATH = "/quiz";
export const QUESTIONS_PATH = "/questions";
export const ACCOUNT_PATH = "/account";
export const ABOUT_PATH = "/about";
export const AUTH_PATH = "/auth";

export type AppRoutes =
  | typeof HOME_PATH
  | typeof QUIZ_PATH
  | typeof QUESTIONS_PATH
  | typeof ACCOUNT_PATH
  | typeof ABOUT_PATH
  | typeof AUTH_PATH;
