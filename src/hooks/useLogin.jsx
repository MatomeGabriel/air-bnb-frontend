import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../services/apiUser";
import toast from "react-hot-toast";

// To login
// 1. On Successful login invalidate our user data, to refetch the user again.
// 2.
const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("Successfully Logged In");
      queryClient.invalidateQueries(["currentUser"]);
      navigate("/");
    },
    onError: (err) => toast.error(err.message),
  });
};

export default useLogin;
