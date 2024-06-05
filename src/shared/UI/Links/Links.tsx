import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AppNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.text};

  &:hover {
    text-decoration: underline;
  }
`;
