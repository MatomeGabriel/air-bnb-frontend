import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "./Buttons";
import { ChevLeftIcon } from "./Icons";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else navigate("/home");
  };

  return (
    <IconButton onClick={handleBack}>
      <ChevLeftIcon />
    </IconButton>
  );
};

export default BackButton;
