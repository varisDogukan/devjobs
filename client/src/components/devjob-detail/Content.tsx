import styled from "styled-components";

import mediaQuery from "@/styles/mediaQuery";
import Text from "../text/Text";
import ButtonLink from "../button/ButtonLink";
import ListGroup from "./ListGroup";

type ContentProps = {
  postedAt?: string;
  contract?: string;
  position?: string;
  location?: string;
  apply?: string;
  description?: string;
  requirements?: {
    content: string;
    items: string[];
  };
  role?: {
    content: string;
    items: string[];
  };
};

export default function Content({
  contract,
  location,
  position,
  postedAt,
  apply,
  description,
  requirements,
  role,
}: ContentProps) {
  return (
    <Wrapper className='container'>
      <div className='content'>
        <div className='header'>
          <div className='header-content'>
            <Text variant='withoutThemeNormal'>
              <span>{postedAt}</span> ● <span role='contract'>{contract}</span>{" "}
            </Text>
            <Text variant='xLarge'>{position}</Text>
            <Text variant='small'>{location}</Text>
          </div>

          <ButtonLink size='custom' type='link' url={apply} target='_blank'>
            Apply Now
          </ButtonLink>
        </div>
        <Text variant='normal'>{description}</Text>

        <ListGroup container={requirements} type='ul' title='Requirements' />
        <ListGroup container={role} type='ol' title='What You Will Do' />
      </div>
    </Wrapper>
  );
}

/*
=========== STYLES =================
*/
const Wrapper = styled.div`
  .content {
    background-color: var(--secondary-bg);
    padding: 40px 24px;
    margin: 24px 0 64px;
    border-radius: 6px;

    .header {
      &-content {
        & > p:not(:last-child) {
          margin-bottom: 12px;
        }

        & > p:first-of-type {
          display: flex;
          gap: 12px;
          margin-bottom: 8px;
        }

        & > p:last-child {
          margin-bottom: 50px;
        }
      }
    }

    & > p {
      margin-top: 32px;
    }

    @media ${mediaQuery.tablet} {
      margin: 32px 0 53px;
      padding: 48px;

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &-content {
          & > p:last-child {
            margin-bottom: 0px;
          }
        }
      }

      & > p {
        margin-top: 40px;
      }
    }
  }
`;
