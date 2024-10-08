import { useTheme } from "styled-components";
import { TIconsTypes } from "./icons-types";

export const QuestionsIcon = ({
  width = "20",
  height = "20",
  ...props
}: TIconsTypes) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={width}
      height={height}
      fill={props?.color || theme.text}
      viewBox="0 0 24 24"
    >
      <g fill={props?.color || theme.text}>
        <path d="M13 0H3a3.009 3.009 0 0 0-3 3v13.99a3.009 3.009 0 0 0 3 3h10a3.009 3.009 0 0 0 3-3V3a3.009 3.009 0 0 0-3-3zm1 16.99a1.016 1.016 0 0 1-1 1H3a1.016 1.016 0 0 1-1-1V3a1.016 1.016 0 0 1 1-1h10c.549.009.991.451 1 1v13.99z" />
        <path d="M20 7v14a3.009 3.009 0 0 1-3 3H5a1 1 0 0 1 0-2h12a1.016 1.016 0 0 0 1-1V7a1 1 0 0 1 2 0z" />
        <circle cx="8" cy="15" r="1" />
        <path d="M12 8a3.992 3.992 0 0 1-3 3.87V12a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1 2 2 0 1 0-2-2 1 1 0 1 1-2 0 4 4 0 1 1 8 0z" />
      </g>
    </svg>
  );
};
