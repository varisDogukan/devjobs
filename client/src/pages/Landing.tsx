import styled from "styled-components";

import Filter from "@/components/filter/Filter";
import CardContainer from "@/components/card-container/CardContainer";

export default function Landing() {
  return (
    <LandingWrapper className='container'>
      <Filter />
      <CardContainer />
    </LandingWrapper>
  );
}

const LandingWrapper = styled.div``;
