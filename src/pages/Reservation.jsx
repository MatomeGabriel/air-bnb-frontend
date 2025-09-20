// if it's the user , show all their reservation

import { Header } from "../ui/Header";
import { MainContainer } from "../ui/MainContainer";
import MainMenu from "../ui/MainMenu";
import { ROUTES } from "../utils/routes";
import ReservationsTable from "../features/reservations/ReservationsTable";
import { filterArr } from "../utils/reservationUtils";

// if it's the owner of the hotel/hotels show all of their reservations

const Reservation = () => {
  return (
    <>
      <Header>
        <MainMenu filterArr={filterArr.hostMenu} />
      </Header>
      <MainContainer>
        <ReservationsTable />
      </MainContainer>
      ;
    </>
  );
};

export default Reservation;
