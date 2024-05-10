import styled from "styled-components";
import Filter from "@/components/filter/Filter";

export default function Landing() {
  return (
    <LandingWrapper className='container'>
      <Filter />
    </LandingWrapper>
  );
}

const LandingWrapper = styled.div``;
