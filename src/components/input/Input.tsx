import styled from "styled-components";

import magnify from "@/assets/magnifying_glass_blue.svg";
import location from "@/assets/location.svg";

interface InputProps {
  icon?: "magnify" | "location" | "without";
  placeholder: string;
  name: string;
}

export default function Input({ icon, ...delegate }: InputProps) {
  const checkIcon = () => {
    if (icon === "magnify") return <img src={magnify} alt='magnify icon' />;
    if (icon === "location") return <img src={location} alt='location icon' />;
    return null;
  };

  return (
    <InputWrapper>
      {checkIcon()}
      <input type='text' {...delegate} />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;

  input {
    border: none;
    background-color: var(--secondaryBg);
    color: var(--secondaryColor);
    width: 100%;
    outline: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &::placeholder {
      opacity: 0.5;
    }
  }
`;
