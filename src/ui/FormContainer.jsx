import styled from "styled-components";
import { colors, generateResponsiveStyles, radii } from "../design-system";

/**
 * StyledFormContainer
 * A centered container with max width, white background, and rounded corners.
 * Adds a border on small screens.
 */
export const StyledFormContainer = styled.div`
  max-width: 56.8rem;
  margin: 0 auto;
  border-radius: ${radii.md};
  background-color: ${colors.white};
  ${generateResponsiveStyles("border", {
    sm: `1px solid ${colors.darkBorder}`,
  })}
  flex: 1;
`;

/**
 * FormContainer
 * Wraps form content inside a styled container.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Form elements to render inside the container.
 * @returns {JSX.Element}
 */
const FormContainer = ({ children }) => {
  return <StyledFormContainer>{children}</StyledFormContainer>;
};

export default FormContainer;
