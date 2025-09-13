import { ROUTES } from "../utils/routes";
import apiClient from "./apiClient";

export const createReservation = async (data) => {
  const res = await apiClient.post(ROUTES.reservations, data);
  return res;
};

export const getReservations = async () => {
  const res = await apiClient.get(ROUTES.reservations);
  return res;
};

export const deleteReservation = async (id) => {
  const res = await apiClient.delete(`${ROUTES.reservations}/${id}`);
  return res;
};
