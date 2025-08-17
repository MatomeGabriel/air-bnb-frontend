import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import {
  createListing,
  deleteListing,
  fetchListings,
  uploadListingImages,
} from "../services/apiListings";
import toast from "react-hot-toast";
import { extractData } from "../utils/extractData";

const ListingsContext = createContext();

/**
 *
 * @param {*} param0
 * @returns
 */

export const ListingsProvider = ({ children }) => {
  const queryClient = useQueryClient();

  // Create a Listing
  const { mutate: createHostListing, isLoading: isCreatingHostListing } =
    useMutation({
      mutationFn: createListing,
      onSuccess: () => {
        toast.success("Listing Created, Uploading Images");
        // queryClient.invalidateQueries(["currentUser"]);
      },
      onError: (err) => toast.error("Failed to create a Listing", err),
    });

  // Upload Images
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
      console.log(err);
    },
  });

  // Fetch Listings

  const { isLoading: isFetchingListings, data: response } = useQuery({
    queryFn: fetchListings,
    queryKey: ["listings"],
    onSuccess: () => toast.success("Data"),
    onError: (err) => {
      toast.error("Failed to fetch data");
      console.log(err);
    },
  });

  const listings = extractData(response);

  // delete a listing

  const {
    mutate: deleteHostListing,
    isLoading: isDeletingHostListing,
    error,
  } = useMutation({
    mutationFn: deleteListing,
    onSuccess: () => {
      toast.success("Listing Deleted Successfully");
      queryClient.invalidateQueries(["listings"]);
    },
    onError: (err) => {
      toast.error("Failed to delete a listing", err);
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
      }}
    >
      {children}
    </ListingsContext.Provider>
  );
};

export const useListings = () => useContext(ListingsContext);
