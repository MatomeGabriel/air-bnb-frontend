import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, typography } from "../design-system";

/**
 * StyledFormNote
 * A paragraph styled for form footnotes or helper text.
 * Includes a styled link with hover and active states.
 */
const StyledFormNote = styled.p`
  font-size: 1.4rem;
  line-height: 1.2;
  align-self: center;
  padding: 0.4rem 0;
  color: ${colors["gray-500"]};

  & a {
    font-weight: ${typography.weights.semiBold};
    color: ${colors.secondary};
    &:hover,
    &:active {
      text-decoration: none;
      color: #444;
    }
  }
`;

/**
 * FormNote
 * Displays a note with optional inline link, typically used below forms.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Text content before the link.
 * @param {string} props.link - URL path for the link.
 * @param {string} props.linkText - Text to display as the link.
 * @returns {JSX.Element}
 */

const FormNote = ({ children, link, linkText }) => {
  return (
    <StyledFormNote>
      {children} <Link to={link}>{linkText}</Link>
    </StyledFormNote>
  );
};

export default FormNote;
