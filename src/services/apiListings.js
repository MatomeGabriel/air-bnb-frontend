import apiClient from "./apiClient";

export const createListing = async (data) => {
  const res = await apiClient.post("/accommodations", data);

  return res;
};
