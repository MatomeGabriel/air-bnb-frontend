import { useAuth } from "../context/AuthContext";

// read the user and is loading from the context and we can access this data anywhere
const useCurrentUser = () => {
  const { user, isLoading, isLoggedIn } = useAuth();

  return { user, isLoading, isLoggedIn };
};

export default useCurrentUser;
