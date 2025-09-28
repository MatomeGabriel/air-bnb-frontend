/**
 * Extracts the data array from a raw API response object.
 * @param {Object} rawData - The raw response object from the API.
 * @returns {Array} The extracted data array, or an empty array if not successful.
 */
export const extractData = (rawData) => {
  const data =
    rawData?.status === "success" || rawData?.status === 200
      ? rawData?.data?.data?.data
      : [];

  return data;
};
/**
 * Extracts the error data from a raw error response object.
 * @param {Object} rawData - The raw error response object.
 * @returns {any} The extracted error data.
 */
export const extractError = (rawData) => {
  const data = rawData?.response.data;
  return data;
};
