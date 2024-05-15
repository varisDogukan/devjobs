import styled from "styled-components";
import { Link } from "react-router-dom";

import Text from "../text/Text";

interface CardProps {
  postedAt: string;
  contract: string;
  company: string;
  position: string;
  location: string;
  logo: string;
  logoBg: string;
  id: number;
}

export default function Card({
  location,
  logo,
  company,
  postedAt,
  position,
  contract,
  logoBg,
  id,
}: CardProps) {
  return (
    <Wrapper $logoBg={logoBg}>
      <div className='img-container'>
        <img src={logo} alt='company logo' />
      </div>

      <Text variant='withoutThemeNormal'>
        <span>{postedAt}</span> ● <span role='contract'>{contract}</span>{" "}
      </Text>
      <Text variant='medium'>
        <Link to={`/devjobs/${id}`} className='card-link'>
          {position}
        </Link>
      </Text>
      <Text variant='withoutThemeNormal'>{company}</Text>
      <Text variant='small'>{location}</Text>
    </Wrapper>
  );
}

/*
=========== STYLES =================
*/
type StyleType = {
  $logoBg: string;
};

const Wrapper = styled.article<StyleType>`
  position: relative;
  padding: 49px 32px 32px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
  background-color: var(--secondary-bg);

  & > p:not(:last-child) {
    margin-bottom: 12px;
  }

  & > p:first-of-type {
    display: flex;
    gap: 12px;
    margin-bottom: 8px;
  }

  & > p:last-child {
    margin-top: 40px;
  }

  .img-container {
    width: 50px;
    height: 50px;
    border-radius: 15px;
    overflow: hidden;
    position: absolute;
    display: grid;
    place-content: center;
    top: 0;
    transform: translateY(-50%);
    background-color: ${({ $logoBg }) => $logoBg};
  }

  .card-link {
    transition: all 0.1s ease-in-out;

    &:hover {
      color: var(--grey);
    }
  }
`;
