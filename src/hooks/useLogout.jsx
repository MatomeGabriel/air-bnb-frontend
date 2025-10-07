import { useAuth } from "../context/AuthContext";

/**
 * useLogout
 * Custom hook to handle user logout functionality.
 * Retrieves logout method and loading state from AuthContext.
 *
 * @returns {Object} - Contains:
 *   - logoutUser: Function to trigger logout
 *   - isLoggingOut: Boolean indicating if logout is in progress
 */
const useLogout = () => {
  const { logoutUser, isLoggingOut } = useAuth();

  return { logoutUser, isLoggingOut };
};

export default useLogout;
