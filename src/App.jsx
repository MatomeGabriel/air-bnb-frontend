import React from "react";
import GlobalStyles from "./design-system/GlobalStyles";
import NavBar from "./ui/NavBar";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
    </BrowserRouter>
  );
};

export default App;
