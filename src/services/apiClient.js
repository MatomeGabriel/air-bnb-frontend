/**
 * Axios client instance for communicating with the backend API.
 *
 * - Uses baseURL from environment variables for deployment flexibility.
 * - Sets default headers and credentials for requests.
 *
 * @see https://axios-http.com/docs/instance
 */
import axios from "axios";
import { baseURL } from "../utils/baseUrl";

const apiClient = axios.create({
  baseURL: `${baseURL}/api`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
