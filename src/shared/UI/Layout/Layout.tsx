import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { NavBar } from "../../../widgets/NavBar";
import { PageLoader } from "../PageLoader/PageLoader";


const Wrapper = styled.main`
  background-color: ${(p) => p.theme.bg};
  transition: all 0.25s ease;
  min-height: 100vh;
`;

export const Layout = () => {
  return (
    <Wrapper>
      <Suspense fallback={<PageLoader />}>
        <NavBar />
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
