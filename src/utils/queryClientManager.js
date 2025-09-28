import toast from "react-hot-toast";
import { queryClient } from "../lib/queryClient";

/**
 *
 */
export const queryKeys = {
  currentUser: ["currentUser"],
  reservations: ["reservations"],
  locationsSummary: ["locationsSummary"],
  listing: ["listing"],
  listings: ["listings", "listing"],
};
export const queryClientManager = {
  invalidate: {
    currentUser: () => queryClient.invalidateQueries(queryKeys.currentUser),
    reservations: () => queryClient.invalidateQueries(queryKeys.reservations),
    listings: () => queryClient.invalidateQueries(queryKeys.listings),
    listing: () => queryClient.invalidateQueries(queryKeys.listing),
  },
  remove: {
    currentUser: () => queryClient.removeQueries(queryKeys.currentUser),
    reservations: () => queryClient.removeQueries(queryKeys.reservations),
  },

  toast: {
    success: (message = "Success") => toast.success(message),
    error: (error, fallback = "Something went wrong") => {
      console.error("error", error);
      toast.error(error?.message || fallback);
    },
  },
};
