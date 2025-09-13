import styled from "styled-components";
import { StyledFormContainer } from "../ui/FormContainer";
import FormHeader from "../ui/FormHeader";
import { boxShadow, generateResponsiveStyles } from "../design-system";
import MainMenu from "../ui/MainMenu";
import { Header } from "../ui/Header";
import ListingForm from "../features/listings/ListingForm";

/**
 * Main wrapper for creating listing page
 * Adds base padding and applies responsive styles
 */
const StyledListing = styled.div`
  padding: 1.2rem;
  ${generateResponsiveStyles("padding", { md: "2.4rem", lg: "4.8rem" })};
`;

/**
 * A container for the Listing form with a box shadow and max-width setting
 */
const StyledListingFormContainer = styled(StyledFormContainer)`
  max-width: 100%;
  box-shadow: ${boxShadow.sm};
  ${generateResponsiveStyles("max-width", { lg: "85%" })};
`;

/**
 * Page Component for creating a new listing
 * Uses `ListingForm` in "create" mode and wraps it inside
 *
 * @component
 * @returns {JSX.Element} The create listing page layout
 */
const CreateListing = () => {
  return (
    <>
      <Header>
        <MainMenu />
      </Header>

      <StyledListing>
        <StyledListingFormContainer>
          <FormHeader>Create Listing</FormHeader>
          <ListingForm mode="create" />
        </StyledListingFormContainer>
      </StyledListing>
    </>
  );
};

export default CreateListing;
