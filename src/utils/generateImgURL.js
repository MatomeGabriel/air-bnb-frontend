import { baseURL } from "./baseUrl";

/**
 * Generates a full image URL based on the provided resource path.
 * @param {string} resource - The image resource path or filename.
 * @returns {string} The full URL to the image resource.
 */
export const generateImgURL = (resource) => {
  return `${baseURL}/${resource}`;
};
