import styled from "styled-components";
import { useState } from "react";

import { useGetDevJobs } from "@/hooks/useDevJobs";
import useStore from "@/store/zuStandStore";
import Card from "../card/Card";
import { JobType } from "@/types";
import mediaQuery from "@/styles/mediaQuery";
import ButtonLink from "../button/ButtonLink";

export default function CardContainer() {
  const { formInfo } = useStore();
  const [count, setCount] = useState(12);

  const { data, isLoading, isError } = useGetDevJobs(formInfo, count);

  const checkData = () => {
    if (isLoading) return <h1 role='loading'>Loading</h1>;
    if (isError) return <h1 role='error'>Error</h1>;

    return data
      ?.slice(0, count)
      .map((item: JobType) => <Card key={item.id} {...item} />);
  };

  return (
    <CardContainerWrapper>
      <div className='card-container'>{checkData()}</div>

      {data && data.length >= 5 && data.length % 12 === 0 && (
        <ButtonLink
          size='custom'
          type='button'
          variant='normal'
          width='141px'
          formType='button'
          onClick={() => setCount(count + 12)}
        >
          Load More
        </ButtonLink>
      )}
    </CardContainerWrapper>
  );
}

const CardContainerWrapper = styled.div`
  margin-top: 57px;
  margin-bottom: 104px;

  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
    row-gap: 49px;
  }

  button {
    margin: 32px auto 0;
  }

  @media ${mediaQuery.tablet} {
    margin-top: 70px;

    button {
      margin-top: 56px;
    }

    .card-container {
      gap: 65px 11px;
      grid-template-columns: repeat(auto-fit, minmax(339px, 1fr));
    }
  }

  @media ${mediaQuery.desktop} {
    margin-top: 105px;

    .card-container {
      column-gap: 30px;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
  }
`;
