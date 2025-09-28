import useCurrentUser from "../hooks/useCurrentUser";
import { Navigate } from "react-router-dom";
import { Spinner } from "./Spinners";

/**
 * RoleProtectedRoute
 *
 * Restricts access to routes based on the user's role.
 * Only users with the specified role can access the wrapped component.
 *
 * Usage:
 *   <RoleProtectedRoute role="user">
 *     <AdminDashboard />
 *   </RoleProtectedRoute>
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Component(s) to render if user has the required role
 * @param {string} [props.role="host"] - Required user role for access
 * @returns {JSX.Element} The protected component or a redirect
 */
const RoleProtectedRoute = ({ children, role = "host" }) => {
  const { user, isLoading, isLoggedIn } = useCurrentUser();
  //Shows Loading state while authentication is being checked
  if (isLoading) return <Spinner />;

  // Redirect unauthenticated users to login page
  if (!isLoggedIn)
    return <Navigate to="/login" state={{ from: location.pathname }} />;

  // Redirect authenticated users without the correct role ro unauthorized page
  if (user.role !== role) return <Navigate to="/unauthorized" replace />;

  // Render children if the user is authenticated and has a proper role
  return children;
};

export default RoleProtectedRoute;
