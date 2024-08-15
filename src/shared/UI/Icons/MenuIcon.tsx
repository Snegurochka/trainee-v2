import { useTheme } from "styled-components";
import { TIconsTypes } from "./icons-types";

export const MenuIcon = ({
  width = "20",
  height = "20",
  ...props
}: TIconsTypes) => {
  const theme = useTheme();
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        fill={props?.color || theme.text}
        fill-rule="evenodd"
        d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
      />
    </svg>
  );
};
