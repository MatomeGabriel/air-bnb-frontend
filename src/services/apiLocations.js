// Service to communicate with our database
// Use by react query
//

import apiClient from "./apiClient";

export const getLocations = async () => {
  try {
    const response = await apiClient.get("/accommodations");
    return response.data;
  } catch (err) {
    console.error("Error fetching locations", err);
    throw new Error("Locations Cannot be loaded.");
  }
};

export const getLocation = async (id) => {
  try {
    const response = await apiClient.get(`/accommodations/${id}`);
    return response.data;
  } catch (err) {
    console.error("Error fetching locations", err);
    throw new Error("Locations Cannot be loaded.");
  }
};
