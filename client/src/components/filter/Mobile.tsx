import { Dispatch, SetStateAction, useRef } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import ButtonLink from "../button/ButtonLink";
import Input from "../input/Input";
import styled from "styled-components";
import Modal from "./Modal";

type MobileProps = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export default function Mobile({ showModal, setShowModal }: MobileProps) {
  const ref = useRef(null);

  const callback = () => {
    setShowModal(false);
  };

  useOutsideClick({ ref, callback });

  return (
    <Wrapper>
      <Input
        name='search'
        placeholder='Filter by title, companies, expertise…'
        icon='magnify'
      />

      <ButtonLink
        size='custom'
        type='button'
        formType='button'
        variant='icon'
        icontype='filter'
        width='max-content'
        onClick={() => setShowModal(true)}
      />

      <ButtonLink
        size='custom'
        type='button'
        formType='submit'
        variant='icon'
        icontype='magnify'
        width='max-content'
      />

      {showModal && <Modal modalRef={ref} />}
    </Wrapper>
  );
}

/*
=========== STYLES =================
*/
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  padding-right: 16px;

  & > div:first-child {
    margin-right: auto;
  }

  & > button {
    flex-shrink: 0;
  }
`;
