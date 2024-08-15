import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { AppNavLink } from "../../shared/UI/Links/Links";
import { TMenuItem } from "./mock-menu";
import { selectIsAuth } from "../../features/Auth/services/auth-selectors";
import { useAppSelector } from "../../shared/services/hooks/redux";

const Wrapper = styled(AppNavLink)`
  color: ${(p) => p.theme.text_invert};
  display: flex;
  gap: 4px;
`;

export const MenuItem = ({
  navItem,
  isCollapsed,
}: {
  navItem: TMenuItem;
  isCollapsed: boolean;
}) => {
  const { t } = useTranslation();
  const isAuth = useAppSelector(selectIsAuth);

  if (navItem.authOnly && !isAuth) {
    return null;
  }

  return (
    <Wrapper key={navItem.path} to={navItem.path}>
      {navItem.icon}
      {!isCollapsed && t(navItem.name)}
    </Wrapper>
  );
};
