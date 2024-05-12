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
  logoBackground: string;
  id: number;
}

export default function Card({
  location,
  logo,
  company,
  postedAt,
  position,
  contract,
  logoBackground,
  id,
}: CardProps) {
  return (
    <CardWrapper logoBackground={logoBackground}>
      <div className='img-container'>
        <img src={logo} alt='company logo' />
      </div>

      <Text variant='withoutThemeNormal'>
        <span>{postedAt}</span> ● <span role='contract'>{contract}</span>{" "}
      </Text>
      <Text variant='large'>
        <Link to={`/${id}`} className='card-link'>
          {position}
        </Link>
      </Text>
      <Text variant='withoutThemeNormal'>{company}</Text>
      <Text variant='small'>{location}</Text>
    </CardWrapper>
  );
}

/*
=========== STYLES =================
*/
type CardType = {
  logoBackground: string;
};

const CardWrapper = styled.article<CardType>`
  position: relative;
  padding: 49px 32px 32px;
  background-color: #fff;
  margin-top: 100px;
  border-radius: 6px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
  background-color: var(--secondary-bg);

  & > p:first-of-type {
    display: flex;
    gap: 12px;
  }

  & > p:not(:last-child) {
    margin-bottom: 12px;
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
    background-color: ${({ logoBackground }) => logoBackground};
  }

  .card-link {
    transition: all 0.1s ease-in-out;

    &:hover {
      color: var(--grey);
    }
  }
`;
