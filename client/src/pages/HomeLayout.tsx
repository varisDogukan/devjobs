import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function HomeLayout() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled.main``;
