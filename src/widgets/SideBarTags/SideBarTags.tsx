import styled from "styled-components";
import { Box } from "../../shared/UI/Box/Box";

const Wrapper = styled(Box)`
  display: flex;
  gap: 8px;
`;

const TagWrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 14px;
  color: ${(p) => p.theme.text};
  font-weight: bold;
`;
export const SideBarTags = () => {
  return (
    <Wrapper>
      <TagWrapper>Mix</TagWrapper>
      <TagWrapper>React</TagWrapper>
    </Wrapper>
  );
};
