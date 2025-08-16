import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { createListing, uploadListingImages } from "../services/apiListings";
import toast from "react-hot-toast";

const ListingsContext = createContext();

/**
 *
 * @param {*} param0
 * @returns
 */

export const ListingsProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const { mutate: createHostListing, isLoading: isCreatingHostListing } =
    useMutation({
      mutationFn: createListing,
      onSuccess: () => {
        toast.success("Listing Created, Uploading Images");
        // queryClient.invalidateQueries(["currentUser"]);
      },
      onError: (err) => toast.error("Failed to create a Listing", err),
    });
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

  return (
    <ListingsContext.Provider
      value={{
        createHostListing,
        isCreatingHostListing,
        uploadHostListingImage,
        isUploadingHostListingImages,
      }}
    >
      {children}
    </ListingsContext.Provider>
  );
};

export const useListings = () => useContext(ListingsContext);
