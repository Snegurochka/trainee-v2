import styled from "styled-components";
import { menuList } from "./mock-menu";
import { Stack } from "../../shared/UI/Box/Box";
import { MenuItem } from "./MenuItem";
import { memo } from "react";

const Wrapper = styled(Stack)`
  gap: 12px;
  color: ${(p) => p.theme.text_invert};
`;

export const Menu = memo(({ isCollapsed }: { isCollapsed: boolean }) => {
  return (
    <Wrapper>
      {menuList.map((navItem) => (
        <MenuItem
          key={navItem.path}
          navItem={navItem}
          isCollapsed={isCollapsed}
        />
      ))}
    </Wrapper>
  );
});
