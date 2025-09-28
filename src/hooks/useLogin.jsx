import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../services/apiUser";
import { queryClientManager } from "../utils/queryClientManager";
import { extractError } from "../utils/extractData";

/**
 * Custom hook for handling user login.
 * Uses React Query's useMutation to perform login and handle side effects.
 *
 * - On success: shows a toast, invalidates user query, and navigates to home.
 * - On error: shows error toast.
 *
 * @returns {object} Mutation object from useMutation
 */
const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClientManager.toast.success("Successfully Logged In");
      queryClientManager.invalidate.currentUser();
      navigate("/");
    },
    onError: (err) => queryClientManager.toast.error(extractError(err)),
  });
};

export default useLogin;
