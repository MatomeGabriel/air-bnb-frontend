/**
 * Service functions for managing reservations via API.
 * Each function returns a Promise from an Axios request.
 */
import { ROUTES } from "../utils/routes";
import apiClient from "./apiClient";

/**
 * Create a new reservation.
 * @param {object} data - Reservation data
 * @returns {Promise<object>} Axios response
 */
export const createReservation = async (data) => {
  const res = await apiClient.post(ROUTES.reservations, data);
  return res;
};

/**
 * Fetch all reservations for the current user.
 * @returns {Promise<object>} Axios response
 */
export const getReservations = async () => {
  const res = await apiClient.get(ROUTES.reservations);
  return res;
};

/**
 * Delete a reservation by ID.
 * @param {string|number} id - Reservation ID
 * @returns {Promise<object>} Axios response
 */
export const deleteReservation = async (id) => {
  const res = await apiClient.delete(`${ROUTES.reservations}/${id}`);
  return res;
};
