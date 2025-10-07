import { useAuth } from "../context/AuthContext";

/**
 * useCurrentUser
 * Custom hook that provides access to the current authenticated user's data.
 * Reads user, loading state, and login status from AuthContext.
 *
 * @returns {Object} - Contains:
 *   - user: Authenticated user object
 *   - isLoading: Boolean indicating if auth data is still loading
 *   - isLoggedIn: Boolean indicating if user is logged in
 */
const useCurrentUser = () => {
  const { user, isLoading, isLoggedIn } = useAuth();

  return { user, isLoading, isLoggedIn };
};

export default useCurrentUser;
