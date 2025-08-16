import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, typography } from "../design-system";

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

const FormNote = ({ children, link, linkText }) => {
  return (
    <StyledFormNote>
      {children} <Link to={link}>{linkText}</Link>
    </StyledFormNote>
  );
};

export default FormNote;
