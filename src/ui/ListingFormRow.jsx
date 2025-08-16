import styled from "styled-components";
import { generateResponsiveStyles } from "../design-system";

const StyledListingFormRow = styled.div`
  display: grid;
  /* grid-template-columns: 24rem 1fr 1.2fr; */
  /* gap: 2.4rem; */
  gap: 1.2rem;
  align-items: center;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid #ddd;
  font-size: 1.4rem;
  line-height: 1.5;
  ${generateResponsiveStyles("grid-template-columns", {
    sm: "1fr 1fr",
    md: "24rem 1.2fr 1fr;",
    // lg: "24rem 1fr 1.2fr;",
  })}
  ${generateResponsiveStyles("gap", { sm: "0", md: "2.4rem" })}

  & label {
    font-weight: 600;
    color: var(--color-black);
  }

  & span {
    color: red;
  }
`;
const ListingFormRow = ({ label, error, children }) => {
  return (
    <StyledListingFormRow>
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <span>{error}</span>}
    </StyledListingFormRow>
  );
};

export default ListingFormRow;
