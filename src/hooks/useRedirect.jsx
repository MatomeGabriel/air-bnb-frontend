import { useNavigate } from "react-router-dom";

const useRedirect = () => {
  const navigate = useNavigate();
  return navigate;
};

export default useRedirect;
