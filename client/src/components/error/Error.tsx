import styled from "styled-components";
import { useRouteError } from "react-router-dom";

import ButtonLink from "../button/ButtonLink";
import Text from "../text/Text";

interface RouteError {
  data: string;
  error: {
    columnNumber: number;
    fileName: string;
    lineNumber: number;
    message: string;
    stack: string;
  };
  internal: boolean;
  status: number;
  statusText: string;
}

export default function Error() {
  const error = useRouteError() as RouteError;

  return (
    <ErrorWrapper>
      <Text variant='xLarge'>Oops!</Text>
      <Text variant='withoutThemeNormal'>
        Sorry, an unexpected error has occurred.
      </Text>
      <Text variant='normal'>
        <i>{error.statusText || error.error.message}</i>
      </Text>

      <ButtonLink
        type='link'
        size='custom'
        width='141px'
        variant='normal'
        url={"/"}
      >
        Back Home
      </ButtonLink>
    </ErrorWrapper>
  );
}

const ErrorWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
