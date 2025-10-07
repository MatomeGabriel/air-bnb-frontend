import { Header } from "../ui/Header";
import { MainContainer } from "../ui/MainContainer";
import MainMenu from "../ui/MainMenu";
import { ROUTES } from "../utils/routes";
import ReservationsTable from "../features/reservations/ReservationsTable";
import { filterArr } from "../utils/reservationUtils";
import { useAuth } from "../context/AuthContext";

/**
 * Reservation
 * Renders the reservations page for both users and hosts.
 * - If the user is a guest, shows their personal reservations.
 * - If the user is a host, shows all reservations for their listed properties.
 * Includes a header with role-based navigation.
 *
 * @returns {JSX.Element}
 */
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
