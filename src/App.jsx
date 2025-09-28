/**
 * App entry point. Sets up routing, context providers, global styles, and React Query.
 * Implements all main routes and page components for the Airbnb front-end.
 *
 * - Uses Providers for app-wide context
 * - Uses QueryClientProvider for React Query
 * - Uses Suspense for future code splitting
 * - All pages and contexts are grouped for clarity
 */

// React and routing
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { lazy } from "react";

// Design system
import GlobalStyles from "./design-system/GlobalStyles";
import { colors } from "./design-system";

// Context providers
import Providers from "./context/Providers";
import { LocationsDataContextProvider } from "./context/LocationsDataContext";
import { SelectedLocationProvider } from "./context/SelectedLocationContext";
import { HostContextProvider } from "./context/HostContext";

// UI components
import RoleProtectedRoute from "./ui/RoleProtectedRoute";
import ProtectedRoute from "./ui/ProtectedRoute";
import RedirectAuth from "./ui/RedirectAuth";

// Pages
const HomePage = lazy(() => import("./pages/HomePage"));

import Locations from "./pages/Locations";
import Login from "./pages/Login";

// Lazy loads for code splitting and performance
const Location = lazy(() => import("./pages/Location"));
const Listings = lazy(() => import("./pages/Listings"));
const CreateListing = lazy(() => import("./pages/CreateListing"));
const EditListing = lazy(() => import("./pages/EditListing"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const UploadProfileImage = lazy(() => import("./pages/UploadProfileImage"));
const UnauthorizedPage = lazy(() => import("./pages/UnauthorizedPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Reservation = lazy(() => import("./pages/Reservation"));

// Utilities
import { queryClient } from "./lib/queryClient";
import { ROUTES } from "./utils/routes";
import { Suspense } from "react";
import { Spinner } from "./ui/Spinners";

const profileInfo = {
  title: "Update your profile",
  text: `Add / Update a profile photo and personal details to help hosts get to know you.`,
  cancelText: "Cancel",
  showInput: true,
  hideMenuFilters: true,
};
/**
 * Main App component.
 * Sets up all providers, routing, and global UI elements.
 * @returns {JSX.Element}
 */
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Providers>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <GlobalStyles />
            <Routes>
              {/* Home page route (public) */}
              <Route
                path="/"
                element={
                  <LocationsDataContextProvider>
                    <HomePage />
                  </LocationsDataContextProvider>
                }
              />

              {/* Locations listing (public) */}
              <Route
                path="/locations"
                element={
                  <LocationsDataContextProvider>
                    <Locations />
                  </LocationsDataContextProvider>
                }
              />

              {/* Single location details (public) */}
              <Route
                path="/locations/:id"
                element={
                  <SelectedLocationProvider>
                    <HostContextProvider>
                      <Location />
                    </HostContextProvider>
                  </SelectedLocationProvider>
                }
              />

              {/* Create new listing (protected, host only) */}
              <Route
                path="/listings/new"
                element={
                  <RoleProtectedRoute>
                    <CreateListing />
                  </RoleProtectedRoute>
                }
              />

              {/* Listings overview (protected, host only) */}
              <Route
                path="/listings"
                element={
                  <RoleProtectedRoute>
                    <Listings />
                  </RoleProtectedRoute>
                }
              />

              {/* Edit listing (protected, host only) */}
              <Route
                path="/listings/edit/:id"
                element={
                  <RoleProtectedRoute>
                    <EditListing />
                  </RoleProtectedRoute>
                }
              />

              {/* Unauthorized access page */}
              <Route path="/unauthorized" element={<UnauthorizedPage />} />

              {/* Upload profile image (protected) */}
              <Route
                path={ROUTES.uploadProfileImg}
                element={
                  <ProtectedRoute>
                    <UploadProfileImage />
                  </ProtectedRoute>
                }
              />

              {/* Profile page (protected) */}
              <Route
                path={ROUTES.profile}
                element={
                  <ProtectedRoute>
                    <UploadProfileImage profileInfo={profileInfo} />
                  </ProtectedRoute>
                }
              />

              {/* Reservations page (protected) */}
              <Route
                path={ROUTES.reservations}
                element={
                  <ProtectedRoute>
                    <Reservation />
                  </ProtectedRoute>
                }
              />

              {/* User profile page (protected) */}
              <Route
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />

              {/* Login page (public, redirects if authenticated) */}
              <Route
                path="/login"
                element={
                  <RedirectAuth>
                    <Login type="login" />
                  </RedirectAuth>
                }
              />

              {/* Signup page (public, redirects if authenticated) */}
              <Route
                path="/signup"
                element={
                  <RedirectAuth>
                    <Login type="signup" />
                  </RedirectAuth>
                }
              />

              {/* Host signup page (public, redirects if authenticated) */}
              <Route
                path="/signup/host"
                element={
                  <RedirectAuth>
                    <Login type="signup" message="Sign up to become a host" />
                  </RedirectAuth>
                }
              />

              {/* Catch-all route for 404 page */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Providers>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: colors.white,
            color: colors["gray-700"],
          },
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
