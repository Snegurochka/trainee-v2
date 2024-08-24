import { useTheme } from "styled-components";
import { TIconsTypes } from "./icons-types";

export const CommentsIcon = ({
  width = "20",
  height = "20",
  ...props
}: TIconsTypes) => {
  const theme = useTheme();
  return (
    <svg
      fill={props?.color || theme.text}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.25 2C6.53691 2 5.13339 3.32542 5.00897 5.00672C5.08874 5.00226 5.16911 5 5.25 5H14.75C17.0972 5 19 6.90279 19 9.25V15.75C19 15.8309 18.9977 15.9113 18.9933 15.991C20.6746 15.8666 22 14.4631 22 12.75V6.75C22 4.12665 19.8734 2 17.25 2H8.25Z"
      />
      <path
        d="M17.9905 16C17.8629 17.6781 16.4608 19 14.75 19H10.6667L7 21.75C6.17595 22.368 5 21.7801 5 20.75V18.9905C3.32189 18.8629 2 17.4608 2 15.75V9.25C2 7.53919 3.32189 6.13713 5 6.00947C5.08251 6.0032 5.16588 6 5.25 6H14.75C16.5449 6 18 7.45507 18 9.25V15.75C18 15.8341 17.9968 15.9175 17.9905 16Z"
      />
    </svg>
  );
};
