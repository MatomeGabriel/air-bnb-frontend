import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getLocation } from "../services/apiLocations";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const SelectedLocationContext = createContext();

export const SelectedLocationProvider = ({ children }) => {
  const { id } = useParams();

  const {
    isLoading: isFetchingLocationData,
    data: response,
    error,
  } = useQuery({
    queryKey: ["location"],
    queryFn: () => getLocation(id),
    onError: (error) => toast.error("Error fetching location data", error),
  });

  const location = response?.status === "success" ? response?.data?.data : [];
  return (
    <SelectedLocationContext.Provider
      value={{ location, isFetchingLocationData, error }}
    >
      {children}
    </SelectedLocationContext.Provider>
  );
};

export const useSelectedLocationContext = () =>
  useContext(SelectedLocationContext);
