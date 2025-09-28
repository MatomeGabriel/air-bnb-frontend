import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getLocation } from "../services/apiLocations";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

/**
 * Context for sharing selected location data and loading state across the app.
 * Provides location info, loading state, and error.
 */
const SelectedLocationContext = createContext();

/**
 * Provider component for SelectedLocationContext.
 * Fetches location data for the selected location and provides it to children.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element}
 */
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

/**
 * Custom hook to access selected location context.
 * @returns {object} Selected location context value
 */
export const useSelectedLocationContext = () =>
  useContext(SelectedLocationContext);
