import styled from "styled-components";
import { MainContainer } from "../ui/MainContainer";
import LocationCards from "../features/locations/LocationCards";
import MainMenu from "../ui/MainMenu";
import { Header } from "../ui/Header";

/**
 * Main
 * Page container for the locations view.
 * Adds consistent padding around the content.
 */
const Main = styled(MainContainer)`
  padding: 4rem;
`;

/**
 * Locations
 * Renders a page displaying available location cards.
 * Includes a header with a search-enabled main menu.
 *
 * @returns {JSX.Element}
 */
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
