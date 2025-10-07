import styled from "styled-components";
import CreateListingForm from "../features/listings/CreateListingForm";
import { StyledFormContainer } from "../ui/FormContainer";
import FormHeader from "../ui/FormHeader";
import { boxShadow, generateResponsiveStyles } from "../design-system";
import MainMenu from "../ui/MainMenu";
import { Header } from "../ui/Header";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchListingById } from "../services/apiListings";
import toast from "react-hot-toast";
import { extractData } from "../utils/extractData";
import ListingForm from "../features/listings/ListingForm";

/**
 * StyledListing
 * Page wrapper with responsive padding for the edit listing view.
 */
const StyledListing = styled.div`
  padding: 1.2rem;
  ${generateResponsiveStyles("padding", { md: "2.4rem", lg: "4.8rem" })};
`;

/**
 * StyledListingFormContainer
 * Form container with full width and shadow styling.
 * Adjusts max-width responsively.
 */
const StyledListingFormContainer = styled(StyledFormContainer)`
  max-width: 100%;
  box-shadow: ${boxShadow.sm};
  ${generateResponsiveStyles("max-width", { lg: "85%" })};
`;

/**
 * EditListing
 * Fetches listing data by ID and renders the edit form.
 * Displays a loading message while fetching.
 *
 * @returns {JSX.Element}
 */
const EditListing = () => {
  const { id } = useParams();

  //   fetch the listing data
  const { data: response, isLoading } = useQuery({
    queryFn: () => fetchListingById(id),
    queryKey: ["listing"],
    onError: (err) => {
      toast.error("Failed to fetch a listing");
      console.log(err);
    },
  });

  if (isLoading) return <p>Loading data</p>;
  const listing = extractData(response);

  return (
    <>
      <Header>
        <MainMenu />
      </Header>

      <StyledListing>
        <StyledListingFormContainer>
          <FormHeader>Edit Listing</FormHeader>
          <ListingForm mode="edit" listing={listing} />
        </StyledListingFormContainer>
      </StyledListing>
    </>
  );
};

export default EditListing;
