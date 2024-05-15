import { useParams } from "react-router-dom";

import { Content, Footer, Header } from "@/components/devjob-detail";
import styled from "styled-components";
import { useGetSingleDevJob } from "@/hooks/useDevJobs";
import Container from "@/components/devjob-detail/Container";

export default function DevJobDetail() {
  const params = useParams();

  const { data, isLoading, isError } = useGetSingleDevJob(params.id!);

  if (isLoading) return <h1 role='loading'>Loading</h1>;
  if (isError) return <h1 role='error'>Error</h1>;

  return (
    <Wrapper>
      <Container>
        <Header
          margin='-15px'
          company={data?.company}
          logo={data?.logo}
          logoBg={data?.logoBg}
          website={data?.website}
        />
        <Content
          contract={data?.contract}
          location={data?.location}
          position={data?.position}
          postedAt={data?.postedAt}
          apply={data?.apply}
          description={data?.description}
          requirements={data?.requirements}
          role={data?.role}
        />
        <Footer
          apply={data?.apply}
          company={data?.company}
          position={data?.position}
        />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
