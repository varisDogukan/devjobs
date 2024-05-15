import styled from "styled-components";

import Filter from "@/components/filter/Filter";
import CardContainer from "@/components/card-container/CardContainer";

export default function Landing() {
  return (
    <Wrapper className='container'>
      <Filter />
      <CardContainer />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
