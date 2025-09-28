import React from "react";
import { AuthProvider } from "./AuthContext";
import { ListingsProvider } from "./ListingsContext";
import { ConfirmProvider } from "./ConfirmContext";
import { PopupProvider } from "./PopUpContext";
import { ReservationsProvider } from "./ReservationContext";

/**
 * Wrapper component that provides all app-level context providers.
 * Use this to wrap your app and ensure all contexts are available.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element}
 */
const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <ListingsProvider>
        <ReservationsProvider>
          <ConfirmProvider>
            <PopupProvider>{children}</PopupProvider>
          </ConfirmProvider>
        </ReservationsProvider>
      </ListingsProvider>
    </AuthProvider>
  );
};

export default Providers;
