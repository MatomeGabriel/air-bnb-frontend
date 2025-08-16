import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getLocation } from "../services/apiLocations";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const SelectedLocationContext = createContext();

export const SelectedLocationProvider = ({ children }) => {
  const { id } = useParams();

  const {
    isLoading,
    data: response,
    error,
  } = useQuery({
    queryKey: ["locations"],
    queryFn: () => getLocation(id),
    onError: (error) => toast.error("Error fetching location data", error),
  });

  const location = response?.status === "success" ? response?.data?.data : [];
  return (
    <SelectedLocationContext.Provider value={{ location, isLoading, error }}>
      {children}
    </SelectedLocationContext.Provider>
  );
};

export const useSelectedLocationContext = () =>
  useContext(SelectedLocationContext);
