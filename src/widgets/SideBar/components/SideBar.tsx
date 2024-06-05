import { useState } from "react";
import { Menu } from "../../Menu/Menu";
import { Stack } from "../../../shared/UI/Box/Box";
import { Button } from "../../../shared/UI/Button/Button";
import styled from "styled-components";
import { NAV_BAR_HEIGHT } from "../../NavBar/components/NavBar";
import { TranslationButton } from "../../TranslationButton/TranslationButton";

const Outer = styled(Stack)<{ isCollapsed: boolean }>`
  width: ${({ isCollapsed }) => (isCollapsed ? "80px" : "260px")};
  height: calc(100vh - ${NAV_BAR_HEIGHT}px);
  transition: width 0.3s;
`;

export const SideBar = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  return (
    <Outer isCollapsed={isCollapsed}>
      <Button
        buttonType="ghost"
        onClick={() => {
          setCollapsed((st) => !st);
        }}
      >
        Toggler
      </Button>
      <Menu isCollapsed={isCollapsed} />

      <TranslationButton />
    </Outer>
  );
};
