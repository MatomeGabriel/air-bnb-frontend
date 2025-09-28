// if it's the user , show all their reservation

import { Header } from "../ui/Header";
import { MainContainer } from "../ui/MainContainer";
import MainMenu from "../ui/MainMenu";
import { ROUTES } from "../utils/routes";
import ReservationsTable from "../features/reservations/ReservationsTable";
import { filterArr } from "../utils/reservationUtils";
import { useAuth } from "../context/AuthContext";

// if it's the owner of the hotel/hotels show all of their reservations

const Reservation = () => {
  const { user } = useAuth();
  return (
    <>
      <Header>
        <MainMenu
          filterArr={
            user.role === "host" ? filterArr.hostMenu : filterArr.userMenu
          }
        />
      </Header>
      <MainContainer>
        <ReservationsTable />
      </MainContainer>
      ;
    </>
  );
};

export default Reservation;
