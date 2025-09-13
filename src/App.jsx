import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./design-system/GlobalStyles";
import HomePage from "./pages/HomePage";
import Locations from "./pages/Locations";
import Login from "./pages/Login";
import Location from "./pages/Location";
import RoleProtectedRoute from "./ui/RoleProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { colors } from "./design-system";
import RedirectAuth from "./ui/RedirectAuth";
import { LocationsDataContextProvider } from "./context/LocationsDataContext";
import { SelectedLocationProvider } from "./context/SelectedLocationContext";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import UploadProfileImage from "./pages/UploadProfileImage";
import ProtectedRoute from "./ui/ProtectedRoute";
import Providers from "./context/Providers";
import Listings from "./pages/Listings";
import EditListing from "./pages/EditListing";
import CreateListing from "./pages/CreateListing";
import ProfilePage from "./pages/ProfilePage";
import { HostContextProvider } from "./context/HostContext";
import PageNotFound from "./pages/PageNotFound";
import { queryClient } from "./lib/queryClient";
import { ROUTES } from "./utils/routes";
import Reservation from "./pages/Reservation";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Providers>
        <BrowserRouter>
          <GlobalStyles />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route
              path="/locations"
              element={
                <LocationsDataContextProvider>
                  <Locations />
                </LocationsDataContextProvider>
              }
            />
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

            <Route
              path="/listings/new"
              element={
                <RoleProtectedRoute>
                  <CreateListing />
                </RoleProtectedRoute>
              }
            />
            <Route
              path="/listings"
              element={
                <RoleProtectedRoute>
                  <Listings />
                </RoleProtectedRoute>
              }
            />

            {/* Editing a listing */}
            <Route
              path="/listings/edit/:id"
              element={
                <RoleProtectedRoute>
                  <EditListing />
                </RoleProtectedRoute>
              }
            />

            <Route path="/unauthorized" element={<UnauthorizedPage />} />

            <Route
              path={ROUTES.uploadProfileImg}
              element={
                <ProtectedRoute>
                  <UploadProfileImage />
                </ProtectedRoute>
              }
            />

            <Route
              path={ROUTES.reservations}
              element={
                <ProtectedRoute>
                  <Reservation />
                </ProtectedRoute>
              }
            />

            <Route
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/login"
              element={
                <RedirectAuth>
                  <Login type="login" />
                </RedirectAuth>
              }
            />

            <Route
              path="/signup"
              element={
                <RedirectAuth>
                  <Login type="signup" />
                </RedirectAuth>
              }
            />
            <Route
              path="/signup/host"
              element={
                <RedirectAuth>
                  <Login type="signup" message="Sign up to become a host" />
                </RedirectAuth>
              }
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
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
