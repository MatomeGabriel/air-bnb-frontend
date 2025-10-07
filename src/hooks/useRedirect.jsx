import { useNavigate } from "react-router-dom";

/**
 * useRedirect
 * Custom hook that returns the `navigate` function from React Router.
 * Useful for programmatic navigation within the app.
 *
 * @returns {Function} - React Router's `navigate` function
 */
const useRedirect = () => {
  const navigate = useNavigate();
  return navigate;
};

export default useRedirect;
