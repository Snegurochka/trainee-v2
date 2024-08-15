import { memo } from "react";
import { useTranslation } from "react-i18next";

import {
  ABOUT_PATH,
  HOME_PATH,
  QUIZ_PATH,
} from "../../../app/services/route/route-constants";
import { FlexBox } from "../../../shared/UI/Box/Box";
import { AppNavLink } from "../../../shared/UI/Links/Links";
import { useAppSelector } from "../../../shared/services/hooks/redux";
import { selectIsAuth } from "../../../features/Auth/services/auth-selectors";

export const NavBar = memo(() => {
  const { t } = useTranslation();
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <FlexBox gap={2}>
      <AppNavLink to={HOME_PATH}>{t("Home")}</AppNavLink>
      {isAuth && <AppNavLink to={QUIZ_PATH}>{t("Quiz")}</AppNavLink>}
      <AppNavLink to={ABOUT_PATH}>{t("How it works?")}</AppNavLink>
    </FlexBox>
  );
});
