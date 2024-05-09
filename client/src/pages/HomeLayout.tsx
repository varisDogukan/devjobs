import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function HomeLayout() {
  return (
    <HomeLayoutWrapper>
      <Header />
      <Outlet />
    </HomeLayoutWrapper>
  );
}

const HomeLayoutWrapper = styled.main``;
