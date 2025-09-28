/**
 * Service functions for managing user authentication and profile via API.
 * Each function returns a Promise from an Axios request.
 */
import apiClient from "./apiClient";

/**
 * Log in a user with credentials.
 * @param {object} credentials - User login credentials
 * @returns {Promise<object>} User data
 */
export const login = async (credentials) => {
  const res = await apiClient.post("/users/login", credentials);
  return res.data;
};

/**
 * Log out the current user.
 * @returns {Promise<object>} Logout response
 */
export const logout = async () => {
  const res = await apiClient.post("/users/logout");
  return res.data;
};

/**
 * Sign up a new user.
 * @param {object} data - User registration data
 * @returns {Promise<object>} User data
 */
export const signUp = async (data) => {
  const res = await apiClient.post("/users/signup", data);
  return res.data;
};

/**
 * Fetch the current logged-in user's data.
 * @returns {Promise<object>} User data
 */
export const getCurrentUser = async () => {
  const res = await apiClient.get("/users/me");
  return res.data;
};

/**
 * Update the profile image for the current user.
 * @param {File} file - Image file to upload
 * @returns {Promise<object>} Axios response
 */
export const updateProfileImage = async (file) => {
  const formdata = new FormData();
  formdata.append("photo", file);
  const res = await apiClient.patch("/users/upload-profile-image", formdata, {
    headers: { "Content-Type": undefined },
  });
  return res;
};

/**
 * Fetch host details by host ID.
 * @param {string|number} hostId - Host ID
 * @returns {Promise<object>} Axios response
 */
export const getHost = async (hostId) => {
  const res = await apiClient.get(`/users/host/${hostId}`);
  return res;
};
