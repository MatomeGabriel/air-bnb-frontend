/**
 * Styled paragraph components for consistent typography across the app.
 *
 * Each export provides a different font size for text elements, based on the design system.
 */

import styled from "styled-components";
import { applyTypographyProps, textBase, typography } from "../design-system";

/**
 * Base styled paragraph component with default typography and mixins.
 */
export const TextBase = styled.p`
  ${textBase}
  ${applyTypographyProps}
`;

/**
 * Small text paragraph component.
 */
export const TextSm = styled(TextBase)`
  font-size: ${typography.sizes.sm};
  line-height: auto;
`;

/**
 * Large text paragraph component.
 */
export const TextLg = styled(TextBase)`
  font-size: ${typography.sizes.lg};
`;

/**
 * Extra large text paragraph component.
 */
export const TextXl = styled(TextBase)`
  font-size: ${typography.sizes.xl};
`;

/**
 * 2x extra large text paragraph component.
 */
export const Text2xl = styled(TextBase)`
  font-size: ${typography.sizes["2xl"]};
`;

/**
 * Extra small text paragraph component.
 */
export const TextXs = styled(TextBase)`
  font-size: ${typography.sizes.xs};
  line-height: auto;
`;
