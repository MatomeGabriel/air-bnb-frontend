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
      onError: (err) => {
        toast.error("Failed to create a Listing", err);
        console.log(err);
      },
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

  // Update Images
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
      console.log(err);
    },
  });

  // Fetch Listings
  const { isLoading: isFetchingListings, data: MultiListingsResponse } =
    useQuery({
      queryFn: fetchListings,
      queryKey: ["listings"],
      onSuccess: () => toast.success("Data"),
      onError: (err) => {
        toast.error("Failed to fetch data");
        console.log(err);
      },
    });
  const listings = extractData(MultiListingsResponse);

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

  // delete single listing image
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

  // update the listing

  const { mutate: updateHostListing, isLoading: isUpdatingHostListing } =
    useMutation({
      mutationFn: updateListing,
      onSuccess: () => {
        toast.success("Listing updated Successfully");
        queryClient.invalidateQueries(["listing"]);
      },
      onError: (err) => {
        toast.error("Failed to update a listing");
        console.log(err);
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

export const useListings = () => useContext(ListingsContext);
