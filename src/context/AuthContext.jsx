// src/context/AuthContext.jsx
import { createContext, useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getCurrentUser,
  login,
  logout,
  signUp,
  updateProfileImage,
} from "../services/apiUser";
import toast from "react-hot-toast";

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
  const queryClient = useQueryClient();

  const { data: response, isLoading } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    retry: false,
    staleTime: 1000 * 60 * 5, // cache 5 min
  });

  // Login
  const { mutate: loginUser, isLoading: isLoggingIn } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("Successfully Logged In");
      queryClient.invalidateQueries(["currentUser"]);
    },
    onError: (err) => toast.error(err.message),
  });

  // Logout
  const { mutate: logoutUser, isLoading: isLoggingOut } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("Successfully Logged out");
      queryClient.removeQueries(["currentUser"]);
    },
  });

  //Signup
  const { mutate: signupUser, isLoading: isSigningUp } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success("Account Created");
      queryClient.invalidateQueries(["currentUser"]);
    },
    onError: (err) => toast.error("Signup failed", err),
  });

  // update profile image

  const { mutate: updateUserProfileImage, isLoading: isUploadingProfileImage } =
    useMutation({
      mutationFn: updateProfileImage,
      onSuccess: (data) => {
        queryClient.invalidateQueries(["currentUser"]);
        toast.success("Profile Image Updated Successfully");
        console.log(data);
      },
      onError: (e) => toast.error("Filed to upoad", e),
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
        updateUserProfileImage,
        isUploadingProfileImage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
