import { useState } from "react";
import styled from "styled-components";
import { Menu } from "../../Menu/Menu";
import { Stack } from "../../../shared/UI/Box/Box";
import { HEADER_BORDER_HEIGHT, HEADER_HEIGHT } from "../../Header/Header";
import { SideBarToggleBtn } from "./SideBarToggleBtn";
import { FOOTER_HEIGHT } from "../../Footer/Footer";
import { SideBarInfo } from "./SideBarInfo";

const getWidth = (isCollapsed: boolean) => {
  return isCollapsed ? "120px" : "220px";
};

const Outer = styled(Stack)<{ $isCollapsed: boolean }>`
  padding-top: 52px;
  padding-left: 24px;
  box-sizing: border-box;
  width: ${({ $isCollapsed }) => getWidth($isCollapsed)};
  min-width: ${({ $isCollapsed }) => getWidth($isCollapsed)};
  height: calc(
    100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px - ${HEADER_BORDER_HEIGHT}px
  );
  min-height: 540px;
  position: relative;
  transition: width 0.3s;
  background-color: ${(p) => p.theme.secondary};
  color: ${(p) => p.theme.text_invert};
  gap: 14px;
`;

export const SideBar = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed((st) => !st);
  };
  return (
    <Outer $isCollapsed={isCollapsed}>
      <SideBarToggleBtn toggle={toggle} isCollapsed={isCollapsed} />
      {!isCollapsed && <SideBarInfo />}
      <Menu isCollapsed={isCollapsed} />
    </Outer>
  );
};
