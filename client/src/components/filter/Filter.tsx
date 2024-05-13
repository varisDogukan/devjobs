import { FormEvent, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

import checkResize from "@/helpers/checkResize";
import useStore from "@/store/zuStandStore";
import MobileContainer from "./MobileFilter";
import TabletAndDesktopContainer from "./TabletFilter";

const getFormValues = (form: EventTarget & HTMLFormElement) => {
  const formData = new FormData(form);

  const data = Object.fromEntries(formData.entries());

  return data;
};

export default function Filter() {
  const [biggerThanMobile, setBiggerThanMobile] = useState(false);
  const [biggerThanTablet, setBiggerThanTablet] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { setFormInfo } = useStore();

  useEffect(() => {
    checkResize(setBiggerThanMobile, 768);
    checkResize(setBiggerThanTablet, 1440);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = getFormValues(event.currentTarget);

    const fullTimeOnly = data.fullTimeOnly === "on" ? true : false;

    setFormInfo({
      search: (data.search as string) || "",
      location: (data.location as string) || "",
      fullTimeOnly: fullTimeOnly,
    });

    setShowModal(false);
    event.currentTarget.reset();
  };

  const checkDevice = (biggerThanMobile: boolean): ReactNode => {
    if (biggerThanMobile) {
      return <TabletAndDesktopContainer biggerThanTablet={biggerThanTablet} />;
    }

    return (
      <MobileContainer showModal={showModal} setShowModal={setShowModal} />
    );
  };

  return (
    <FilterWrapper onSubmit={handleSubmit} role='form'>
      {checkDevice(biggerThanMobile)}
    </FilterWrapper>
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
