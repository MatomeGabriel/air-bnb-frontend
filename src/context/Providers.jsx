import React from "react";
import { AuthProvider } from "./AuthContext";
import { ListingsProvider } from "./ListingsContext";
import { ConfirmProvider } from "./ConfirmContext";
import { PopupProvider } from "./PopUpContext";
import { ReservationsProvider } from "./ReservationContext";

/**
 *
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
