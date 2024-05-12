import styled from "styled-components";

import { useGetDevJobs } from "@/hooks/useDevJobs";
import useStore from "@/store/zuStandStore";
import Card from "../card/Card";
import { JobType } from "@/types";
import mediaQuery from "@/styles/mediaQuery";

export default function CardContainer() {
  const { formInfo } = useStore();

  const { data, isLoading } = useGetDevJobs(formInfo);

  const checkData = () => {
    if (isLoading) {
      return <h1>Loading</h1>;
    } else {
      return data?.map((item: JobType) => <Card key={item.id} {...item} />);
    }
  };

  return <CardContainerWrapper>{checkData()}</CardContainerWrapper>;
}

const CardContainerWrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 104px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
  row-gap: 24px;

  @media ${mediaQuery.tablet} {
    gap: 65px 11px;
    grid-template-columns: repeat(auto-fit, minmax(339px, 1fr));
  }

  @media ${mediaQuery.desktop} {
    column-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;
