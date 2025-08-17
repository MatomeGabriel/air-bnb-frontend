import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./design-system/GlobalStyles";
import HomePage from "./pages/HomePage";
import PageNotFound from "./ui/PageNotFound";
import Locations from "./pages/Locations";
import Login from "./pages/Login";
import Listing from "./pages/Listing";
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    },
  },
});
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
                  <Location />
                </SelectedLocationProvider>
              }
            />

            <Route
              path="/listings/new"
              element={
                <RoleProtectedRoute>
                  <Listing />
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

            <Route path="/unauthorized" element={<UnauthorizedPage />} />

            <Route
              path="/profile-image"
              element={
                <ProtectedRoute>
                  <UploadProfileImage />
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
