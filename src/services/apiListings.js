import apiClient from "./apiClient";

export const createListing = async (data) => {
  const res = await apiClient.post("/accommodations", data);

  return res;
};

export const uploadListingImages = async ({ images, listingId }) => {
  const formData = new FormData();
  images.forEach((image) => formData.append("images", image.file));
  console.log("Listing Id", listingId);
  console.log("Images", images);
  console.log(formData);
  const res = await apiClient.post(
    `/accommodations/${listingId}/images`,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );

  return res;
};

export const fetchListings = async () => {
  const res = await apiClient.get("/accommodations/host/listings");
  return res;
};

export const deleteListing = async (listing_id) => {
  const res = await apiClient.delete(`/accommodations/${listing_id}`);
  return res;
};
