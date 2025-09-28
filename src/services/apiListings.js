/**
 * Service functions for managing accommodation listings via API.
 * Each function returns a Promise from an Axios request.
 */
import apiClient from "./apiClient";

/**
 * Create a new accommodation listing.
 * @param {object} data - Listing data
 * @returns {Promise<object>} Axios response
 */
export const createListing = async (data) => {
  const res = await apiClient.post("/accommodations", data);
  return res;
};

/**
 * Upload images for a specific listing.
 * @param {object} params
 * @param {Array} params.images - Array of image objects
 * @param {string|number} params.listingId - Listing ID
 * @returns {Promise<object>} Axios response
 */
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

/**
 * Append new images to an existing listing (does not replace existing images).
 * @param {object} params
 * @param {Array} params.images - Array of image objects
 * @param {string|number} params.listingId - Listing ID
 * @returns {Promise<object>} Axios response
 */
export const updateListingImages = async ({ images, listingId }) => {
  const formData = new FormData();
  images.forEach((image) => formData.append("images", image.file));
  formData.append("mode", "append");
  const res = await apiClient.patch(
    `/accommodations/${listingId}/images`,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return res;
};

/**
 * Fetch all listings for the current host/user.
 * @returns {Promise<object>} Axios response
 */
export const fetchListings = async () => {
  const res = await apiClient.get("/accommodations/host/listings");
  return res;
};

/**
 * Delete a listing by ID.
 * @param {string|number} listingId - Listing ID
 * @returns {Promise<object>} Axios response
 */
export const deleteListing = async (listingId) => {
  const res = await apiClient.delete(`/accommodations/${listingId}`);
  return res;
};

/**
 * Fetch a single listing by ID.
 * @param {string|number} listingId - Listing ID
 * @returns {Promise<object>} Axios response
 */
export const fetchListingById = async (listingId) => {
  const res = await apiClient.get(`/accommodations/${listingId}`);
  return res;
};

/**
 * Delete a single image from a listing.
 * @param {object} params
 * @param {string|number} params.listingId - Listing ID
 * @param {object} params.data - Data specifying which image to delete
 * @returns {Promise<object>} Axios response
 */
export const deleteListingImage = async ({ listingId, data }) => {
  const res = await apiClient.delete(`/accommodations/${listingId}/images`, {
    data,
  });
  return res;
};

/**
 * Update details of a listing.
 * @param {object} params
 * @param {string|number} params.listingId - Listing ID
 * @param {object} params.data - Updated listing data
 * @returns {Promise<object>} Axios response
 */
export const updateListing = async ({ listingId, data }) => {
  const res = await apiClient.patch(`/accommodations/${listingId}`, data);
  return res;
};
