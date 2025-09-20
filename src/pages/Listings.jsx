import styled from "styled-components";
import { MainContainer } from "../ui/MainContainer";
import { Header } from "../ui/Header";
import MainMenu from "../ui/MainMenu";
import ResponsiveCardGrid from "../features/locations/ResponsiveCardGrid";
import MobileCard from "../features/locations/MobileCard";
import DesktopCard from "../features/locations/DesktopCard";
import { useListings } from "../context/ListingsContext";
import { filterArr } from "../utils/reservationUtils";

const Main = styled(MainContainer)`
  padding: 4rem;
`;
const Listings = () => {
  const { listings, isFetchingListings } = useListings();

  if (isFetchingListings) <p>Loading...</p>;

  return (
    <>
      <Header>
        <MainMenu filterArr={filterArr.hostMenu} />
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
