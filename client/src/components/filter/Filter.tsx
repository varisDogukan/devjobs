import React from "react";
import styled from "styled-components";

import checkResize from "@/helpers/checkResize";
import Input from "../input/Input";
import Checkbox from "../checkbox/Checkbox";
import ButtonLink from "../button/ButtonLink";
import mediaQuery from "@/styles/mediaQuery";
import useOutsideClick from "@/helpers/useOutsideClick";

export default function Filter() {
  const [biggerThanMobile, setBiggerThanMobile] = React.useState(false);
  const [biggerThanTablet, setBiggerThanTablet] = React.useState(false);

  React.useEffect(() => {
    checkResize(setBiggerThanMobile, 768);
    checkResize(setBiggerThanTablet, 1440);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const checkDevice = (biggerThanMobile: boolean): React.ReactNode => {
    if (biggerThanMobile) {
      return <TabletAndDesktopContainer biggerThanTablet={biggerThanTablet} />;
    }

    return <MobileContainer />;
  };

  return (
    <FilterWrapper onSubmit={handleSubmit}>
      {checkDevice(biggerThanMobile)}
    </FilterWrapper>
  );
}

function TabletAndDesktopContainer({
  biggerThanTablet,
}: {
  biggerThanTablet: boolean;
}) {
  return (
    <TabletContainerWrapper>
      <Input
        name='title'
        placeholder='Filter by title, companies, expertise…'
        icon='magnify'
      />

      <Input
        name='location'
        placeholder='Filter by location…'
        icon='location'
      />

      <div className='checkbox-container'>
        <Checkbox checked={false} id='type'>
          {biggerThanTablet ? "Full Time Only" : "Full Time"}
        </Checkbox>

        <ButtonLink
          size='custom'
          type='button'
          formType='submit'
          variant='normal'
          width='123px'
        >
          Search
        </ButtonLink>
      </div>
    </TabletContainerWrapper>
  );
}

function MobileContainer() {
  const [showModal, setShowModal] = React.useState(false);
  const ref = React.useRef(null);

  const callback = () => {
    setShowModal(false);
  };

  useOutsideClick({ ref, callback });

  return (
    <MobileContainerWrapper>
      <Input
        name='title'
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
    </MobileContainerWrapper>
  );
}

function Modal({ modalRef }: { modalRef: React.LegacyRef<HTMLDivElement> }) {
  return (
    <ModalWrapper>
      <div className='modal-container' ref={modalRef}>
        <Input
          name='location'
          placeholder='Filter by location…'
          icon='location'
        />

        <div>
          <Checkbox checked={false} id='type'>
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
const FilterWrapper = styled.form`
  background-color: var(--secondary-bg);
  margin-top: -40px;
  border-radius: 6px;
  height: 80px;
`;

const MobileContainerWrapper = styled.div`
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

const TabletContainerWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  & > div {
    &:first-child {
      flex: 2;
    }

    &:nth-of-type(2) {
      flex: 1;
      border-left: 1px solid var(--line-bg);
      border-right: 1px solid var(--line-bg);
    }
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    gap: 28px;
    flex-shrink: 0;
    padding: 0 16px;

    @media ${mediaQuery.tablet} {
      padding-left: 20px;
    }

    @media ${mediaQuery.desktop} {
      padding-left: 32px;
    }
  }
`;

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
