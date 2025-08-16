import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getLocations } from "../services/apiLocations";
import toast from "react-hot-toast";

const LocationsDataContext = createContext();

export const LocationsDataContextProvider = ({ children }) => {
  const {
    isLoading,
    data: response,
    error,
  } = useQuery({
    queryKey: ["locations"],
    queryFn: getLocations,
    OnError: (error) => toast.error("Error fetching location data", error),
  });

  const locations = response?.status === "success" ? response?.data?.data : [];

  return (
    <LocationsDataContext.Provider value={{ isLoading, locations, error }}>
      {children}
    </LocationsDataContext.Provider>
  );
};

export const useLocationsDataContext = () => useContext(LocationsDataContext);

// rewrite this
