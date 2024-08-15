import { styled, css } from "styled-components";
import type { TBoxProps } from "../ui-types";

const SHIFT = 8; 

export const Box = styled.div<TBoxProps>`
  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap * SHIFT}px;
    `}
  ${(props) =>
    props.$m &&
    css`
      margin: ${props.$m * SHIFT}px;
    `}
`;

export const Stack = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const FlexBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export const FlexBoxCenter = styled(Box)({
  display: "flex",
  justifyContent: "center",
});
