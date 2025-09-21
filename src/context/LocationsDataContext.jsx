import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getLocations } from "../services/apiLocations";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../utils/routes";

const LocationsDataContext = createContext();

export const LocationsDataContextProvider = ({ children }) => {
  const { pathname, search } = useLocation();
  const isOnLocationPage = pathname === ROUTES.viewLocations;

  const {
    isLoading,
    data: response,
    error,
  } = useQuery({
    queryKey: ["locations", search],
    queryFn: () => getLocations(search),
    enabled: isOnLocationPage,
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
