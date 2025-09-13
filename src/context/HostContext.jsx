import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { getHost } from "../services/apiUser";
import { useSelectedLocationContext } from "./SelectedLocationContext";
import { extractData } from "../utils/extractData";

const HostContext = createContext();

export const HostContextProvider = ({ children }) => {
  const { location } = useSelectedLocationContext();
  const { host_id } = location;

  const {
    isLoading: isFetchingHost,
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

export const useHostContext = () => useContext(HostContext);
