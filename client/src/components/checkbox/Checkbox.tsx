import styled from "styled-components";

import icon from "../../assets/tick.svg";

interface CheckboxProps {
  children: string;
  id: string;
  name: string;
}

export default function Checkbox({ children, ...delegate }: CheckboxProps) {
  return (
    <CheckboxWrapper htmlFor={delegate.id} role='fullTimeOnly'>
      <input type='checkbox' {...delegate} />
      <span>
        <img src={icon} alt='' />
      </span>
      <p>{children}</p>
    </CheckboxWrapper>
  );
}

/*
=========== STYLES =================
*/
const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  input {
    display: none;
  }

  span {
    display: grid;
    place-content: center;
    width: 24px;
    height: 24px;
    background-color: var(--checkbox-theme-bg);
    border-radius: 3px;

    img {
      display: none;
    }
  }

  p {
    user-select: none;
    color: var(--secondary-color);
    font-weight: bold;
  }

  input:checked + span {
    background-color: var(--checkbox-active);

    img {
      display: block;
    }
  }

  &:hover {
    span {
      background-color: var(--checkbox-hover);
    }
  }
`;
