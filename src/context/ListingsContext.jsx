import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import {
  createListing,
  deleteListing,
  deleteListingImage,
  fetchListings,
  updateListing,
  updateListingImages,
  uploadListingImages,
} from "../services/apiListings";
import toast from "react-hot-toast";
import { extractData, extractError } from "../utils/extractData";
import { queryClientManager } from "../utils/queryClientManager";

/**
 * Context for managing listings and related operations (CRUD, image upload, etc.)
 */
const ListingsContext = createContext();

/**
 * Provider component for ListingsContext.
 * Handles all listing-related mutations and queries using React Query.
 * Provides loading states and CRUD functions to children via context.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element}
 */
export const ListingsProvider = ({ children }) => {
  const queryClient = useQueryClient();

  /**
   * Create a new listing for the host.
   * Shows toast notifications on success/error.
   */
  const { mutate: createHostListing, isLoading: isCreatingHostListing } =
    useMutation({
      mutationFn: createListing,
      onSuccess: () => {
        toast.success("Listing Created, Uploading Images");
        // queryClient.invalidateQueries(["currentUser"]);
      },
      onError: (err) => {
        toast.error("Failed to create a Listing", err);
        console.error(err);
      },
    });

  /**
   * Upload images for a listing.
   * Shows toast notifications on success/error.
   */
  const {
    mutate: uploadHostListingImage,
    isLoading: isUploadingHostListingImages,
  } = useMutation({
    mutationFn: uploadListingImages,
    onSuccess: () => {
      toast.success("Listing Images Uploaded Successfully");
      // queryClient.invalidateQueries(["currentUser"]);
    },
    onError: (err) => {
      toast.error("Failed to upload listing images", err.message);
      console.error(err);
    },
  });

  /**
   * Update images for a listing.
   * Invalidates listing queries on success.
   */
  const {
    mutate: updateHostListingImages,
    isLoading: isUpdatingHostListingImages,
  } = useMutation({
    mutationFn: updateListingImages,
    onSuccess: () => {
      toast.success("Listing Images Updated Successfully");
      queryClient.invalidateQueries(["listing", "listings"]);
    },
    onError: (err) => {
      toast.error("Failed to update listing images", err.message);
      console.error(err);
    },
  });

  /**
   * Fetch all listings for the host/user.
   * Shows toast notifications on success/error.
   */
  const { isLoading: isFetchingListings, data: MultiListingsResponse } =
    useQuery({
      queryFn: fetchListings,
      queryKey: ["listings"],
      onSuccess: () => toast.success("Data"),
      onError: (err) => {
        toast.error("Failed to fetch data");
        console.error(err);
      },
    });
  const listings = extractData(MultiListingsResponse);

  /**
   * Delete a listing.
   * Invalidates listings query on success.
   */
  const { mutate: deleteHostListing, isLoading: isDeletingHostListing } =
    useMutation({
      mutationFn: deleteListing,
      onSuccess: () => {
        toast.success("Listing Deleted Successfully");
        queryClient.invalidateQueries(["listings"]);
      },
      onError: (err) => {
        toast.error("Failed to delete a listing", err);
      },
    });

  /**
   * Delete a single image from a listing.
   * Invalidates listing query on success.
   */
  const {
    mutate: deleteSingleListingImage,
    isLoading: isDeletingSingleListingImage,
  } = useMutation({
    mutationFn: deleteListingImage,
    onSuccess: () => {
      toast.success("Cloud image deleted successfully");
      queryClient.invalidateQueries(["listing"]);
    },
    onError: (err) => {
      toast.error("Failed to delete an Image", err);
    },
  });

  /**
   * Update a listing's details.
   * Uses queryClientManager for notifications and query invalidation.
   */
  const { mutate: updateHostListing, isLoading: isUpdatingHostListing } =
    useMutation({
      mutationFn: updateListing,
      onSuccess: () => {
        queryClientManager.toast.success("Listing updated Successfully");
        queryClientManager.invalidate.listing();
      },
      onError: (err) => {
        queryClientManager.onError(
          extractError(err),
          "Failed to update a listing"
        );
      },
    });

  return (
    <ListingsContext.Provider
      value={{
        createHostListing,
        isCreatingHostListing,
        uploadHostListingImage,
        isUploadingHostListingImages,
        isFetchingListings,
        listings,
        deleteHostListing,
        isDeletingHostListing,
        deleteSingleListingImage,
        isDeletingSingleListingImage,
        updateHostListing,
        isUpdatingHostListing,
        updateHostListingImages,
        isUpdatingHostListingImages,
      }}
    >
      {children}
    </ListingsContext.Provider>
  );
};

/**
 * Custom hook to access listings context.
 * @returns {object} Listings context value
 */
export const useListings = () => useContext(ListingsContext);
