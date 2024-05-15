import mediaQuery from "@/styles/mediaQuery";
import styled from "styled-components";
import Text from "../text/Text";
import { useId } from "react";

type ContentProps = {
  container?: {
    content: string;
    items: string[];
  };
  type: "ul" | "ol";
  title: string;
};

export default function ListGroup({ container, type, title }: ContentProps) {
  const id = useId();

  return (
    <Wrapper $type={type}>
      <Text variant='medium'>{title}</Text>
      <Text variant='normal'>{container?.content}</Text>

      <ul>
        {container?.items.map((item, index) => (
          <ListItem key={`${id}-${index}`} $index={index} $type={type}>
            <Text variant='normal'>{item}</Text>
          </ListItem>
        ))}
      </ul>
    </Wrapper>
  );
}

/*
=========== STYLES =================
*/
type StyleType = {
  $type: "ul" | "ol";
};

const Wrapper = styled.div<StyleType>`
  margin-top: ${({ $type }) => ($type === "ul" ? "66px" : "40px")};

  & > p:first-of-type {
    margin-bottom: 28px;
  }

  ul {
    margin-top: 32px;
  }

  @media ${mediaQuery.tablet} {
    margin-top: ${({ $type }) => ($type === "ul" ? "24px" : "40px")};

    & > p:first-of-type {
      margin-bottom: 23px;
    }

    ul {
      margin-top: 24px;
    }
  }

  @media ${mediaQuery.desktop} {
    margin-top: ${({ $type }) => ($type === "ul" ? "23px" : "48px")};
  }
`;

type ListStyleType = {
  $index: number;
  $type: "ul" | "ol";
};

const ListItem = styled.li<ListStyleType>`
  display: flex;
  position: relative;
  gap: 32px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &::before {
    content: "${({ $type, $index }) => ($type === "ul" ? "●" : $index + 1)}";
    color: var(--violet-700);
  }
`;
