import { styled, css } from "styled-components";

const SHIFT = 8; 

export const Box = styled.div<{ gap?: number }>`
  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap * SHIFT}px;
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
