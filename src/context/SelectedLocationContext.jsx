import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getLocation } from "../services/apiLocations";
import toast from "react-hot-toast";
import { useParams, useLocation } from "react-router-dom";

/**
 * Context for sharing selected location data and loading state across the app.
 * Provides location info, loading state, and error.
 */
const SelectedLocationContext = createContext();

/**
 * Provider component for SelectedLocationContext.
 * Fetches location data for the selected location and provides it to children.
 * Only runs the query if the current route matches /locations/:id.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element}
 */
export const SelectedLocationProvider = ({ children }) => {
  const { id } = useParams();
  const locationPath = useLocation();

  // Only enable query if path matches /locations/:id
  const isLocationRoute = /^\/locations\/[^/]+$/.test(locationPath.pathname);

  /**
   * Fetches location data using React Query.
   * Only runs if we're on a valid location route and have an ID.
   */
  const {
    isLoading: isFetchingLocationData,
    data: response,
    error,
  } = useQuery({
    queryKey: ["location", id],
    queryFn: () => getLocation(id),
    enabled: isLocationRoute && !!id,
    onError: () => toast.error("Error fetching location data"),
  });

  /**
   * Extracts location data from the response.
   * Defaults to an empty array if the response is not successful.
   */
  const location = response?.status === "success" ? response?.data?.data : [];

  return (
    <SelectedLocationContext.Provider
      value={{ location, isFetchingLocationData, error }}
    >
      {children}
    </SelectedLocationContext.Provider>
  );
};

/**
 * Custom hook to access selected location context.
 * @returns {object} Selected location context value
 */
export const useSelectedLocationContext = () =>
  useContext(SelectedLocationContext);
