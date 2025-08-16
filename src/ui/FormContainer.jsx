import React from "react";
import styled from "styled-components";
import { colors, generateResponsiveStyles, radii } from "../design-system";

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

const FormContainer = ({ children }) => {
  return <StyledFormContainer>{children}</StyledFormContainer>;
};

export default FormContainer;
