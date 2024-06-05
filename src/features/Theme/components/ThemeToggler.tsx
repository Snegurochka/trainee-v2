import styled from "styled-components";
import { LIGHT_THEME } from "../services/theme-constants";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";
import { FlexBox } from "../../../shared/UI/Box/Box";
import { Switch } from "../../../shared/UI/Switch/Switch";

const ThemeTogglerWrapper = styled(FlexBox)`
  width: 120px;
  position: absolute;
  right: calc(50% - 600px);
  top: 24px;
  z-index: 99;
`;

export const ThemeToggler = ({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: () => void;
}) => {
  return (
    <ThemeTogglerWrapper>
      <SunIcon />
      <Switch toggleAction={toggleTheme} isRight={theme !== LIGHT_THEME} />
      <MoonIcon />
    </ThemeTogglerWrapper>
  );
};
