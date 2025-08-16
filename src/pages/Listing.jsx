import React from "react";
import styled from "styled-components";
import CreateListingForm from "../features/listings/CreateListingForm";
import FormContainer, { StyledFormContainer } from "../ui/FormContainer";
import FormHeader from "../ui/FormHeader";
import { boxShadow, generateResponsiveStyles } from "../design-system";
import MainMenu from "../ui/MainMenu";
import { Header } from "../ui/Header";

const StyledListing = styled.div`
  padding: 1.2rem;
  ${generateResponsiveStyles("padding", { md: "2.4rem", lg: "4.8rem" })};
`;
const StyledListingFormContainer = styled(StyledFormContainer)`
  max-width: 100%;
  box-shadow: ${boxShadow.sm};
  ${generateResponsiveStyles("max-width", { lg: "85%" })};
`;

const Listing = () => {
  return (
    <>
      <Header>
        <MainMenu />
      </Header>

      <StyledListing>
        <StyledListingFormContainer>
          <FormHeader>Create Listing</FormHeader>
          <CreateListingForm />
        </StyledListingFormContainer>
      </StyledListing>
    </>
  );
};

export default Listing;
