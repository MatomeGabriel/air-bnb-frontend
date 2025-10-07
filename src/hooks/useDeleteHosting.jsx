import { useLocation } from "react-router-dom";
import { useListings } from "../context/ListingsContext";

/**
 * UseDeleteHosting
 * Custom hook for deleting a host's listing and tracking deletion state.
 * Also checks if the current route is "/listings".
 *
 * @returns {Object} - Contains:
 *   - onDeleteHosting: Function to delete a listing by ID
 *   - isDeletingHostListing: Boolean indicating if deletion is in progress
 *   - isListings: Boolean indicating if current route is "/listings"
 */
const UseDeleteHosting = () => {
  const { deleteHostListing, isDeletingHostListing } = useListings();
  const isListings = useLocation().pathname === "/listings";

  const onDeleteHosting = (_id) => {
    deleteHostListing(_id, {
      onError: (err) => {
        console.error(err);
      },
    });
  };

  return { onDeleteHosting, isDeletingHostListing, isListings };
};

export default UseDeleteHosting;
