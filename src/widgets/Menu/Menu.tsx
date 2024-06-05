import { menuList } from "./mock-menu";
import { Stack } from "../../shared/UI/Box/Box";
import { AppNavLink } from "../../shared/UI/Links/Links";

export const Menu = ({ isCollapsed }: { isCollapsed: boolean }) => {
  return (
    <Stack>
      {menuList.map((navItem) => (
        <AppNavLink key={navItem.id} to={navItem.path}>
          {isCollapsed ? "ixon" : navItem.name}
        </AppNavLink>
      ))}
    </Stack>
  );
};
