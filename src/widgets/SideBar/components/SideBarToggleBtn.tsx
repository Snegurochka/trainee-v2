import styled from "styled-components";
import { Button } from "../../../shared/UI/Button/Button";
import {MenuIcon} from "../../../shared/UI/Icons/MenuIcon";

const Wrapper = styled(Button)`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
  padding: 0;
`;

export const SideBarToggleBtn = ({
  toggle,
  isCollapsed,
}: {
  toggle: () => void;
  isCollapsed: boolean;
}) => {
  return (
    <Wrapper buttonType="ghost" onClick={toggle}>
      {isCollapsed ? <MenuIcon color="#fff" /> : "X"}
    </Wrapper>
  );
};
