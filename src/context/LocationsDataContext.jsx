import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getLocations, getLocationsSummary } from "../services/apiLocations";

import { useLocation } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import { extractError } from "../utils/extractData";
import { queryClientManager, queryKeys } from "../utils/queryClientManager";

/**
 * Context for sharing locations data and summary across the app.
 * Provides location list, summary, loading states, and errors.
 */
const LocationsDataContext = createContext();

/**
 * Provider component for LocationsDataContext.
 * Fetches locations and summary data, and provides them to children.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element}
 */
export const LocationsDataContextProvider = ({ children }) => {
  const { pathname, search } = useLocation();
  const isOnLocationPage = pathname === ROUTES.viewLocations;
  const isOnHomePage = pathname === ROUTES.home;

  const {
    isLoading,
    data: response,
    error,
  } = useQuery({
    queryKey: ["locations", search],
    queryFn: () => getLocations(search),
    enabled: isOnLocationPage,
    OnError: (error) => queryClientManager.toast.error(extractError(error)),
  });

  const locations = response?.status === "success" ? response?.data?.data : [];

  // Get Location Summary
  const {
    isLoading: isLoadingLocationsSummary,
    data: locationsSummaryResponse,
    error: locationsSummaryError,
  } = useQuery({
    queryKey: queryKeys.locationsSummary,
    queryFn: getLocationsSummary,
    enabled: isOnHomePage || isOnLocationPage,
    OnError: (error) => queryClientManager.toast.error(extractError(error)),
  });

  // extracted locations Summary data
  const locationsSummary =
    locationsSummaryResponse?.status === "success"
      ? locationsSummaryResponse?.data?.data
      : [];

  // retrieve locations list from summary for easier access
  const locationsList = isLoadingLocationsSummary
    ? []
    : locationsSummary[0]?.locations || [];
  const locationsType = isLoadingLocationsSummary
    ? []
    : locationsSummary[0]?.type || [];

  // retrieve maxGuests and minGuests from summary for easier access
  const locationsGuests = isLoadingLocationsSummary
    ? { maxGuest: 0, minGuests: 0 }
    : {
        maxGuest: locationsSummary[0]?.maxGuest,
        minGuest: locationsSummary[0]?.minGuest,
      };

  return (
    <LocationsDataContext.Provider
      value={{
        isLoading,
        locations,
        error,
        locationsSummary,
        locationsSummaryError,
        isLoadingLocationsSummary,
        locationsList,
        locationsGuests,
        locationsType,
      }}
    >
      {children}
    </LocationsDataContext.Provider>
  );
};

/**
 * Custom hook to access locations data context.
 * @returns {object} Locations data context value
 */
export const useLocationsDataContext = () => useContext(LocationsDataContext);
