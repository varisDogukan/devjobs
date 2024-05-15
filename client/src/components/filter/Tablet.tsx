import styled from "styled-components";

import Input from "../input/Input";
import Checkbox from "../checkbox/Checkbox";
import ButtonLink from "../button/ButtonLink";
import mediaQuery from "@/styles/mediaQuery";

type TabletProps = {
  biggerThanTablet: boolean;
};

export default function Tablet({ biggerThanTablet }: TabletProps) {
  return (
    <Wrapper>
      <Input
        name='search'
        placeholder='Filter by title, companies, expertise…'
        icon='magnify'
      />

      <Input
        name='location'
        placeholder='Filter by location…'
        icon='location'
      />

      <div className='checkbox-container'>
        <Checkbox id='type' name='fullTimeOnly'>
          {biggerThanTablet ? "Full Time Only" : "Full Time"}
        </Checkbox>

        <ButtonLink
          size='custom'
          type='button'
          formType='submit'
          variant='normal'
          width='123px'
        >
          Search
        </ButtonLink>
      </div>
    </Wrapper>
  );
}

/*
=========== STYLES =================
*/
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  & > div {
    &:first-child {
      flex: 2;
    }

    &:nth-of-type(2) {
      flex: 1;
      border-left: 1px solid var(--line-bg);
      border-right: 1px solid var(--line-bg);
    }
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    gap: 28px;
    flex-shrink: 0;
    padding: 0 16px;

    @media ${mediaQuery.tablet} {
      padding-left: 20px;
    }

    @media ${mediaQuery.desktop} {
      padding-left: 32px;
    }
  }
`;
