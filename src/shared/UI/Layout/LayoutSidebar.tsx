import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { SideBar } from "../../../widgets/SideBar";
import { FlexBox } from "../Box/Box";

const Content = styled.section`
  flex-grow: 1;
  padding: 24px;
`;

export const LayoutSidebar = () => {
  return (
    <FlexBox>
      <SideBar />
      <Content>
        <Outlet />
      </Content>
    </FlexBox>
  );
};
