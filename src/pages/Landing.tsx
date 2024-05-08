import Filter from "@/components/filter/Filter";
import styled from "styled-components";

export default function Landing() {
  return (
    <LandingWrapper className='container'>
      <Filter />
    </LandingWrapper>
  );
}

const LandingWrapper = styled.div``;
