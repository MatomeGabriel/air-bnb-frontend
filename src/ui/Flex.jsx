import styled from "styled-components";
import {
  applyFlexProps,
  applySpacing,
  flexColumnStart,
  flexRowStartCenter,
} from "../design-system";

/**
 * FlexColumn
 * A vertical flex container with customizable flex properties.
 */
export const FlexColumn = styled.div`
  ${flexColumnStart}
  ${applyFlexProps}
`;

/**
 * FlexRow
 * A horizontal flex container with spacing and customizable flex properties.
 */
export const FlexRow = styled.div`
  ${flexRowStartCenter}
  ${applyFlexProps}
  ${applySpacing}
`;
