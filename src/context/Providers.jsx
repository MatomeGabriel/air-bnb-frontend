import React from "react";
import { AuthProvider } from "./AuthContext";
import { ListingsProvider } from "./ListingsContext";
import { ConfirmProvider } from "./ConfirmContext";

/**
 *
 */
const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <ListingsProvider>
        <ConfirmProvider>{children}</ConfirmProvider>
      </ListingsProvider>
    </AuthProvider>
  );
};

export default Providers;
