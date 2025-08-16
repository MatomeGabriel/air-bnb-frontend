import React from "react";
import styled from "styled-components";
import { MainContainer } from "../ui/MainContainer";
import LocationCards from "../features/locations/LocationCards";
import MainMenu from "../ui/MainMenu";
import { Header } from "../ui/Header";

const Main = styled(MainContainer)`
  padding: 4rem;
`;

const Locations = () => {
  const showSearchBar = { filledSearch: true };
  return (
    <>
      <Header>
        <MainMenu showSearchBar={showSearchBar} />
      </Header>

      <Main>
        <LocationCards />
      </Main>
    </>
  );
};

export default Locations;
