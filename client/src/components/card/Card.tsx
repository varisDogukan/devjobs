import styled from "styled-components";

import Text from "../text/Text";

interface CardProps {
  time: string;
  type: "Part Time" | "Full Time" | "Freelance";
  companyName: string;
  jobTitle: string;
  country: string;
  icon: string;
}

export default function Card({
  country,
  icon,
  companyName,
  time,
  jobTitle,
  type,
}: CardProps) {
  return (
    <CardWrapper>
      <div className='img-container'>
        <img src={icon} alt='company icon' />
      </div>

      <Text variant='withoutThemeNormal'>
        <span>{time}</span> ● <span>{type}</span>{" "}
      </Text>
      <Text variant='large'>{jobTitle}</Text>
      <Text variant='withoutThemeNormal'>{companyName}</Text>
      <Text variant='small'>{country}</Text>
    </CardWrapper>
  );
}

/*
=========== STYLES =================
*/
const CardWrapper = styled.article`
  position: relative;
  width: max-content;
  padding: 49px 32px 32px;
  background-color: #fff;
  margin-top: 100px;
  margin-left: 100px;
  border-radius: 6px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);

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
    top: 0;
    transform: translateY(-50%);
  }
`;
