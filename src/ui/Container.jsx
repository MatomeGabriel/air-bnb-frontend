import styled from "styled-components";
import {
  applySpacing,
  colors,
  generateResponsiveStyles,
  radii,
} from "../design-system";

export const Container = styled.div`
  max-width: 56.8rem;
  margin: 0 auto;
  border-radius: ${radii.md};
  background-color: ${colors.white};
  ${generateResponsiveStyles("border", {
    sm: `1px solid ${colors.darkBorder}`,
  })}
  flex: 1;
  ${applySpacing}
`;
