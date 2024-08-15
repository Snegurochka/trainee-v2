import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface IButtonStyleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $isLoaded?: boolean;
  $buttonType?: (typeof buttonTypes)[number];
}

const ButtonStyled = styled.button<IButtonStyleProps>`
  font-size: 1em;
  cursor: ${({ $isLoaded }) => ($isLoaded ? "wait" : "pointer")};
  color: ${({ theme, $buttonType }) => theme.ui.buttons[$buttonType].color};
  background: ${({ theme, $buttonType }) =>
    theme.ui.buttons[$buttonType].background};
  border: ${({ theme, $buttonType }) => theme.ui.buttons[$buttonType].border};
  ${({ $buttonType }) =>
    $buttonType !== "ghost" &&
    `
    margin: 0.5em 0; 
    border-radius: 25px; 
    padding: 0.75em 1.5em;
    `}

  &:hover {
    opacity: 0.8;
  }
`;

export const buttonTypes = [
  "primary",
  "secondary",
  "outlined",
  "ghost",
] as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
  isLoaded?: boolean;
  buttonType?: (typeof buttonTypes)[number];
  children?: ReactNode;
}

export const Button = ({
  children,
  buttonType = "primary",
  ...rest
}: ButtonProps) => {
  const { isLoaded, isDisabled } = rest;
  return (
    <ButtonStyled
      disabled={Boolean(isDisabled)}
      $buttonType={buttonType}
      $isLoaded={isLoaded}
      {...rest}
    >
      {isLoaded ? "Loading" : children}
    </ButtonStyled>
  );
};
