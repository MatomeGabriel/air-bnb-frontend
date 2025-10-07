import styled from "styled-components";
import { flexRowBetween, spacing } from "../design-system";

/**
 * Header
 * A horizontal layout container for top-level navigation or branding.
 * Includes spacing, padding, and a subtle bottom shadow.
 */
export const Header = styled.header`
  ${flexRowBetween}
  gap: ${spacing.lg};
  padding: ${spacing.lg};
  /* border-bottom: 1px solid #f3f4f6; */
  box-shadow: inset 0 -1px 0 #f3f4f6;
`;
