import { useAuth } from "../context/AuthContext";

const useLogout = () => {
  const { logoutUser, isLoggingOut } = useAuth();

  return { logoutUser, isLoggingOut };
};

export default useLogout;
