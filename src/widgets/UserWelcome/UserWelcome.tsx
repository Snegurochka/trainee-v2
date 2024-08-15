import styled from "styled-components";
import { selectUserName } from "../../entities/User/services/user-selectors";
import { useAppSelector } from "../../shared/services/hooks/redux";
import { memo } from "react";

const Wrapper = styled.div`
  color: ${(p) => p.theme.text_invert};
`;

export const UserWelcome = memo(() => {
  const name = useAppSelector(selectUserName);
  return (
    <Wrapper>
      <p>Hi {name}!</p>
      <p>What do you want to learn?</p>
    </Wrapper>
  );
});
