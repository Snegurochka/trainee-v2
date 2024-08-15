import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { Header, HEADER_HEIGHT } from "../../../widgets/Header/Header";
import { Footer, FOOTER_HEIGHT } from "../../../widgets/Footer/Footer";
import { SideBar } from "../../../widgets/SideBar";
import { FlexBox } from "../Box/Box";
import { useAppSelector } from "../../services/hooks/redux";
import { selectIsAuth } from "../../../features/Auth/services/auth-selectors";
import { PageLoader } from "../PageLoader/PageLoader";

const Content = styled.section`
  flex-grow: 1;
  padding: 24px;
  box-sizing: border-box;
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px - 1px);
`;

const Wrapper = styled.main`
  background-color: ${(p) => p.theme.bg};
  transition: all 0.25s ease;
`;

export const Layout = () => {
  const isAuth = useAppSelector(selectIsAuth);
  return (
    <Wrapper>
      <Header />
      <FlexBox>
        {isAuth && <SideBar />}
        <Suspense fallback={<PageLoader />}>
          <Content>
            <Outlet />
          </Content>
        </Suspense>
      </FlexBox>
      <Footer />
    </Wrapper>
  );
};
