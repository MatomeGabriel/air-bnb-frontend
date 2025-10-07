import toast from "react-hot-toast";
import { queryClient } from "../lib/queryClient";

/**
 * queryKeys
 * Centralized keys used for React Query operations.
 * Helps maintain consistency across query and mutation calls.
 */
export const queryKeys = {
  currentUser: ["currentUser"],
  reservations: ["reservations"],
  locationsSummary: ["locationsSummary"],
  listing: ["listing"],
  listings: ["listings", "listing"],
};

/**
 * queryClientManager
 * Utility for managing React Query cache and toast notifications.
 *
 * Methods:
 * - invalidate: Triggers refetch for specific query keys.
 * - remove: Clears cached data for specific query keys.
 * - toast: Displays success or error messages using react-hot-toast.
 */
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
