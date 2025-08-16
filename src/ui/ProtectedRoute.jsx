import { Link } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";

const ProtectedRoute = ({ children }) => {
  // load authenticated user
  const { user, isLoading } = useCurrentUser();
  // 2. show a spinner
  if (isLoading) return <p>Is loading ...</p>;
  // if there is no authenticated user, redirect to the login page
  if (!user) return <Link to="/">Restricted Page Loggin first</Link>;

  // if the user, render the app.
  return children;
};

export default ProtectedRoute;
