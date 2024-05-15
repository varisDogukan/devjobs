import React from "react";
import styled from "styled-components";

export default function Container({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div``;
