import React from "react";
import { AuthProvider } from "./AuthContext";
import { ListingsProvider } from "./ListingsContext";

/** */
const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <ListingsProvider>{children}</ListingsProvider>
    </AuthProvider>
  );
};

export default Providers;
