import styled from "styled-components";
import {
  applySpacing,
  colors,
  generateResponsiveStyles,
  radii,
} from "../design-system";

/**
 * Container
 * A centered layout box with max width, rounded corners, and white background.
 * Adds spacing and a border on small screens.
 */
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
