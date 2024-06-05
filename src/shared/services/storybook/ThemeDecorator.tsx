import type { StoryFn } from "@storybook/react";
import { ThemeAppProvider } from "../../../features/Theme";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: ${(p) => p.theme.bg};
  transition: all 0.25s ease;
  min-width: 600px;
  padding: 60px 0;
  text-align: center;
`;

export const ThemeDecorator = (Story: StoryFn) => {
  return (
    <ThemeAppProvider>
      <Wrapper>
        <Story />
      </Wrapper>
    </ThemeAppProvider>
  );
};
