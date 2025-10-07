import styled from "styled-components";
import { MainContainer } from "../ui/MainContainer";
import { Header } from "../ui/Header";
import MainMenu from "../ui/MainMenu";
import ResponsiveCardGrid from "../features/locations/ResponsiveCardGrid";
import MobileCard from "../features/locations/MobileCard";
import DesktopCard from "../features/locations/DesktopCard";
import { useListings } from "../context/ListingsContext";
import { filterArr } from "../utils/reservationUtils";
import { useAuth } from "../context/AuthContext";
import { Spinner } from "../ui/Spinners";

/**
 * Main
 * Page container with padding for the listings view.
 */
const Main = styled(MainContainer)`
  padding: 4rem;
`;

/**
 * Listings
 * Displays hotel listings for the current user.
 * Shows a loading spinner while fetching data.
 * Renders mobile or desktop cards based on screen size.
 *
 * @returns {JSX.Element}
 */
const Listings = () => {
  const { user } = useAuth();
  const { listings, isFetchingListings } = useListings();
  if (isFetchingListings) return <Spinner />;

  return (
    <>
      <Header>
        <MainMenu
          filterArr={
            user.role === "host" ? filterArr.hostMenu : filterArr.userMenu
          }
        />
      </Header>
      <Main>
        <ResponsiveCardGrid
          items={listings}
          headerText="My Hotel Listing"
          renderCard={(place, view) =>
            view === "mobile" ? (
              <MobileCard place={place} />
            ) : (
              <DesktopCard place={place} />
            )
          }
        />
      </Main>
    </>
  );
};

export default Listings;
