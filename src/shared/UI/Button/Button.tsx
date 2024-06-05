import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const ButtonStyled = styled.button<ButtonProps>`
  font-size: 1em;
  cursor: ${({ isLoaded }) => (isLoaded ? "wait" : "pointer")};
  margin: 0.5em;
  border-radius: 25px;
  padding: 0.75em 1.5em;
  ${(p) => {
    const buttonStyle = p.theme.ui.buttons[p.buttonType];
    return `
      color: ${buttonStyle.color};
      background: ${buttonStyle.background};
      border: ${buttonStyle.border}
    `;
  }};

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
    <ButtonStyled disabled={Boolean(isDisabled)} buttonType={buttonType} {...rest}>
      {isLoaded ? "Loading" : children}
    </ButtonStyled>
  );
};
