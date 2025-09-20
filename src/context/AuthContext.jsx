import { createContext, useContext } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getCurrentUser,
  login,
  logout,
  signUp,
  updateProfileImage,
} from "../services/apiUser";

import toast from "react-hot-toast";
import { queryClientManager, queryKeys } from "../utils/queryClientManager";
import { extractError } from "../utils/extractData";

// Create a context to share authentication related state and actions across the app
const AuthContext = createContext();

/**
 * This component gives access to authentication state/data (like user info and login status)
 * as well as actions such as login, logout and signup to all child component
 *
 * You wrap your app or part of your app so that other components can use AuthContext
 * @component
 * @param {Object} props
 * @params {React.ReactNode} props.children - Child component that consumes the auth context
 * @returns {JSX.Element} A wrapper that shares authentication data with it's children
 */
export const AuthProvider = ({ children }) => {
  /**
   * Get the current user, every 5 minutes
   *
   */
  const { data: response, isLoading } = useQuery({
    queryKey: queryKeys.currentUser,
    queryFn: getCurrentUser,
    retry: false,
    staleTime: 1000 * 60 * 5, // cache 5 min
  });

  /**
   * Login the user
   */

  // when passing the error ensure you get the server response
  const {
    mutate: loginUser,
    isLoading: isLoggingIn,
    loginError,
  } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClientManager.toast.success("Successfully Logged In");
      queryClientManager.invalidate.currentUser();
    },
    onError: (err) => {
      queryClientManager.toast.error(extractError(err) || err);
    },
  });

  /**
   * Logs the current user out
   *
   */
  const { mutate: logoutUser, isLoading: isLoggingOut } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClientManager.toast.success("Successfully Logged out");
      queryClientManager.invalidate.reservations();
      queryClientManager.remove.currentUser();
    },
  });

  /**
   * Signs up the new user
   */
  const { mutate: signupUser, isLoading: isSigningUp } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      queryClientManager.toast.success("Account Created Successfully");
      queryClientManager.invalidate.currentUser();
    },
    onError: (err) => {
      queryClientManager.toast.error(extractError(err) || err);
    },
  });

  /**
   * Uploads a profile images
   */
  const { mutate: updateUserProfileImage, isLoading: isUploadingProfileImage } =
    useMutation({
      mutationFn: updateProfileImage,
      onSuccess: (data) => {
        queryClientManager.invalidate.currentUser();
        queryClientManager.toast.success("Profile Image Updated Successfully");
        console.log(data);
      },
      onError: (e) => toast.error("Filed to upload", e),
    });

  // get our user
  const user = response?.status === "success" ? response?.data?.data : null;
  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        logoutUser,
        isLoggingOut,
        isLoggedIn,
        signupUser,
        isSigningUp,
        loginUser,
        isLoggingIn,
        loginError,
        updateUserProfileImage,
        isUploadingProfileImage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
