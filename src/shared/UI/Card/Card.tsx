import styled from "styled-components";
import { Box, FlexBox } from "../Box/Box";
import { ReactNode } from "react";
import { Button } from "../Button/Button";
import type { TBoxProps } from "../ui-types";

const Wrapper = styled(Box)`
  background-color: ${(p) => p.theme.ui.card};
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  border-radius: 5px;
  position: relative;
`;

const Title = styled.h3`
  margin-bottom: 32px;
  padding-bottom: 10px;
  margin: 0 0 16px;
  border-bottom: 1px solid ${(p) => p.theme.border};
`;

const WrapperButtons = styled(FlexBox)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

type TActionButton = {
  readonly title: string;
  readonly action: () => void;
};

interface TCardProps extends TBoxProps {
  readonly title?: string;
  readonly actionsButtons?: TActionButton[];
  children: ReactNode;
}

const CardButtons = ({ actionsButtons }: { readonly actionsButtons: TActionButton[]}) => {
    return (
      <WrapperButtons gap={4} >
        {actionsButtons.map(({ title, action }) => (
          <Button buttonType="ghost" key={title} onClick={action}>
            {title}
          </Button>
        ))}
      </WrapperButtons>
    );
}

export const Card = ({
  children,
  actionsButtons,
  title,
  ...rest
}: TCardProps) => {
  return (
    <Wrapper {...rest}>
      {actionsButtons &&
        actionsButtons.length > 0 && <CardButtons actionsButtons={actionsButtons} />}
      {title && <Title>{title}</Title>}
      {children}
    </Wrapper>
  );
};
