import { LegacyRef } from "react";
import ButtonLink from "../button/ButtonLink";
import Input from "../input/Input";
import styled from "styled-components";
import Checkbox from "../checkbox/Checkbox";

type ModalType = {
  modalRef: LegacyRef<HTMLDivElement>;
};

export default function Modal({ modalRef }: ModalType) {
  return (
    <ModalWrapper>
      <div className='modal-container' ref={modalRef}>
        <Input
          name='location'
          placeholder='Filter by location…'
          icon='location'
        />

        <div>
          <Checkbox id='type' name='fullTimeOnly'>
            Full Time Only
          </Checkbox>

          <ButtonLink
            size='full'
            type='button'
            formType='submit'
            variant='normal'
          >
            Search
          </ButtonLink>
        </div>
      </div>
    </ModalWrapper>
  );
}

/*
=========== STYLES =================
*/
const ModalWrapper = styled.div`
  position: fixed;
  display: grid;
  place-content: center;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;

  .modal-container {
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    height: 217px;
    background-color: var(--secondary-bg);

    & > div:first-child {
      border-bottom: 1px solid var(--line-bg);
    }

    & > div:not(:first-child) {
      padding: 24px;
      height: 144px;

      & > button {
        margin-top: 24px;
        width: 100%;
      }
    }
  }
`;
