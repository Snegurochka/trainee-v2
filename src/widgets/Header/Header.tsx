import styled from "styled-components";
import { FlexBox } from "../../shared/UI/Box/Box";
import { NavBar } from "../NavBar";
import { AuthNavButton } from "../../features/Auth";
import { Logo } from "../Logo/Logo";
import { TranslationButton } from "../TranslationButton/TranslationButton";
import { memo } from "react";

export const HEADER_HEIGHT = "74";
export const HEADER_BORDER_HEIGHT = "1";

const HeaderWrapper = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  border-bottom: 1px solid ${(p) => p.theme.border};
`;

const HeaderInner = styled(FlexBox)`
  max-width: 930px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

export const Header = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo />
        <NavBar />
        <AuthNavButton />
        <TranslationButton />
      </HeaderInner>
    </HeaderWrapper>
  );
});
