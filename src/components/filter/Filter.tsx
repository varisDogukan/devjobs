import checkResize from "@/helpers/checkResize";
import React from "react";
import styled from "styled-components";

export default function Filter() {
  const [biggerThanMobile, setBiggerThanMobile] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    checkResize(setBiggerThanMobile);
  }, []);

  if (biggerThanMobile) {
    return <FilterWrapper></FilterWrapper>;
  }

  return <FilterWrapper>Ss</FilterWrapper>;
}

const FilterWrapper = styled.div``;
