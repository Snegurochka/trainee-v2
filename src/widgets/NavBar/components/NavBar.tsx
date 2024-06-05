import { ReactNode } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import {
  ABOUT_PATH,
  HOME_PATH,
  QUIZ_PATH,
} from "../../../app/services/route/route-constants";
import { FlexBox } from "../../../shared/UI/Box/Box";
import { AppNavLink } from "../../../shared/UI/Links/Links";
import { Button } from "../../../shared/UI/Button/Button";

export const NAV_BAR_HEIGHT = "74";

const NavWrapper = styled.nav`
  width: 100%;
  height: ${NAV_BAR_HEIGHT}px;
`;

const NavInner = styled(FlexBox)`
  max-width: 930px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

export const NavBar = ({ children }: { children?: ReactNode }) => {
  const { t } = useTranslation();
  return (
    <NavWrapper>
      <NavInner>
        <FlexBox gap={2}>
          <AppNavLink to={HOME_PATH}>{t("Home")}</AppNavLink>
          <AppNavLink to={QUIZ_PATH}>Quiz</AppNavLink>
          <AppNavLink to={ABOUT_PATH}>How it works?</AppNavLink>
        </FlexBox>
        <Button
          onClick={() => {
            console.log("dddd");
          }}
        >
          Sign Up
        </Button>
        {children}
      </NavInner>
    </NavWrapper>
  );
};
