// if it's the user , show all their reservation

import { Header } from "../ui/Header";
import { MainContainer } from "../ui/MainContainer";
import MainMenu from "../ui/MainMenu";
import { ROUTES } from "../utils/routes";
import ReservationsTable from "../features/reservations/ReservationsTable";

// if it's the owner of the hotel/hotels show all of their reservations
const filterArr = [
  {
    title: "View Reservations",
    url: ROUTES.reservations,
  },
  {
    title: "View Listings",
    url: ROUTES.manageListings,
  },
  {
    title: "Create a Listing",
    url: ROUTES.createListing,
  },
];

const Reservation = () => {
  return (
    <>
      <Header>
        <MainMenu filterArr={filterArr} />
      </Header>
      <MainContainer>
        <ReservationsTable />
      </MainContainer>
      ;
    </>
  );
};

export default Reservation;
