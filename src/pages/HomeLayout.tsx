import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function HomeLayout() {
  return (
    <HomeLayoutWrapper>
      <Outlet />
    </HomeLayoutWrapper>
  );
}

const HomeLayoutWrapper = styled.main``;
