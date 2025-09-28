/**
 * Service functions for fetching location data via API.
 * Each function returns a Promise from an Axios request.
 */
import { ROUTES } from "../utils/routes";
import apiClient from "./apiClient";

/**
 * Fetch a list of locations, optionally filtered by search query.
 * @param {string} search - Search query string (e.g. '?city=London')
 * @returns {Promise<object>} Locations data
 */
export const getLocations = async (search) => {
  try {
    const response = await apiClient.get(`/accommodations${search}`);
    return response.data;
  } catch (err) {
    console.error("Error fetching locations", err);
    throw new Error("Locations Cannot be loaded.");
  }
};

/**
 * Fetch details for a single location by ID.
 * @param {string|number} id - Location ID
 * @returns {Promise<object>} Location data
 */
export const getLocation = async (id) => {
  try {
    const response = await apiClient.get(`/accommodations/${id}`);
    return response.data;
  } catch (err) {
    console.error("Error fetching locations", err);
    throw new Error("Locations Cannot be loaded.");
  }
};

/**
 * Fetch summary data for all locations.
 * @returns {Promise<object>} Locations summary data
 */
export const getLocationsSummary = async () => {
  const response = await apiClient.get(`/accommodations/locations/summary`);
  return response.data;
};
