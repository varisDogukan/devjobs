import styled from "styled-components";

import icon from "@/assets/tick.svg";

interface CheckboxProps {
  children: string;
  id: string;
  checked: boolean;
}

export default function Checkbox({
  children,
  id,
  checked = false,
}: CheckboxProps) {
  return (
    <CheckboxWrapper htmlFor={id}>
      <input type='checkbox' id={id} defaultChecked={checked} />
      <span>
        <img src={icon} alt='' />
      </span>
      <p>{children}</p>
    </CheckboxWrapper>
  );
}

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
