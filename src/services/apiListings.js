import apiClient from "./apiClient";

export const createListing = async (data) => {
  const res = await apiClient.post("/accommodations", data);
  return res;
};

export const uploadListingImages = async ({ images, listingId }) => {
  const formData = new FormData();
  images.forEach((image) => formData.append("images", image.file));
  const res = await apiClient.post(
    `/accommodations/${listingId}/images`,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );

  return res;
};

// Update images through appending them with previous one
export const updateListingImages = async ({ images, listingId }) => {
  const formData = new FormData();
  images.forEach((image) => formData.append("images", image.file));
  // This shows that we are appending images instead of replacing them,
  formData.append("mode", "append");
  const res = await apiClient.patch(
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

export const deleteListing = async (listingId) => {
  const res = await apiClient.delete(`/accommodations/${listingId}`);
  return res;
};

export const fetchListingById = async (listingId) => {
  const res = await apiClient.get(`/accommodations/${listingId}`);
  return res;
};

// for deleting a single image
export const deleteListingImage = async ({ listingId, data }) => {
  const res = await apiClient.delete(`/accommodations/${listingId}/images`, {
    data,
  });
  return res;
};

export const updateListing = async ({ listingId, data }) => {
  const res = await apiClient.patch(`/accommodations/${listingId}`, data);
  return res;
};
