import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { getHost } from "../services/apiUser";
import { useSelectedLocationContext } from "./SelectedLocationContext";
import { extractData } from "../utils/extractData";

/**
 * Context for sharing host data and loading state across the app.
 * Provides host info, loading state, and error.
 */
const HostContext = createContext();

/**
 * Provider component for HostContext.
 * Fetches host data for the selected location and provides it to children.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element}
 */
export const HostContextProvider = ({ children }) => {
  const { location } = useSelectedLocationContext();
  const { host_id } = location;

  const {
    isPending: isFetchingHost,
    data: response,
    error,
  } = useQuery({
    queryKey: ["host"],
    queryFn: () => getHost(host_id),
    onError: (error) => toast.error("Error fetching Host data", error),
  });

  const host = extractData(response);

  return (
    <HostContext.Provider value={{ host, isFetchingHost, error }}>
      {children}
    </HostContext.Provider>
  );
};

/**
 * Custom hook to access host context.
 * @returns {object} Host context value
 */
export const useHostContext = () => useContext(HostContext);
