import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import {
  createReservation,
  deleteReservation,
  getReservations,
} from "../services/apiReservations";

import { queryClientManager, queryKeys } from "../utils/queryClientManager";
import { extractData, extractError } from "../utils/extractData";

const ReservationsContext = createContext();

export const ReservationsProvider = ({ children }) => {
  /**
   * Create a reservation
   *
   *
   */

  const {
    mutate: reserveAccommodation,
    isLoading: isReservingAccommodation,
    reservationError,
  } = useMutation({
    mutationFn: createReservation,
    onSuccess: () => {
      queryClientManager.toast.success("Successfully Created Reservation");
      queryClientManager.invalidate.reservations();
    },
    onError: (err) => {
      queryClientManager.toast.error(extractError(err) || err);
    },
  });

  // Detete a reservation

  const {
    mutate: deleteAccommodationReservation,
    isLoading: isDeletingReservation,
    deleteReservationError,
  } = useMutation({
    mutationFn: deleteReservation,
    onSuccess: () => {
      queryClientManager.toast.success("Successfully Deleted Reservation");
      queryClientManager.invalidate.reservations();
    },
    onError: (err) => {
      queryClientManager.toast.error(extractError(err) || err);
    },
  });

  /**
   * Gets a reservation
   */

  //   1. id
  // only enable when we are in the reservation page to fetch data

  const {
    isFetchingReservations,
    data: response,
    reservationsError,
  } = useQuery({
    queryKey: queryKeys.reservations,
    queryFn: getReservations,
    onError: (err) => queryClientManager.toast.error(extractError(err) || err),
  });

  const reservations = extractData(response);

  return (
    <ReservationsContext.Provider
      value={{
        reserveAccommodation,
        isReservingAccommodation,
        reservationError,
        reservations,
        isFetchingReservations,
        reservationsError,
        deleteAccommodationReservation,
        isDeletingReservation,
        deleteReservationError,
      }}
    >
      {children}
    </ReservationsContext.Provider>
  );
};

export const useReservationsContext = () => useContext(ReservationsContext);
