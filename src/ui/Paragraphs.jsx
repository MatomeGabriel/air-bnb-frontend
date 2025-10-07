/**
 * Styled paragraph components for consistent typography across the app.
 *
 * Each export provides a different font size for text elements, based on the design system.
 */

import styled from "styled-components";
import { applyTypographyProps, textBase, typography } from "../design-system";

/**
 * TextBase
 * Base paragraph with default typography and mixins.
 */
export const TextBase = styled.p`
  ${textBase}
  ${applyTypographyProps}
`;

/**
 * TextSm
 * Small-sized paragraph text.
 */
export const TextSm = styled(TextBase)`
  font-size: ${typography.sizes.sm};
  line-height: auto;
`;

/**
 * TextLg
 * Large-sized paragraph text.
 */
export const TextLg = styled(TextBase)`
  font-size: ${typography.sizes.lg};
`;

/**
 * TextXl
 * Extra-large paragraph text.
 */
export const TextXl = styled(TextBase)`
  font-size: ${typography.sizes.xl};
`;

/**
 * Text2xl
 * 2x extra-large paragraph text.
 */
export const Text2xl = styled(TextBase)`
  font-size: ${typography.sizes["2xl"]};
`;

/**
 * TextXs
 * Extra-small paragraph text.
 */
export const TextXs = styled(TextBase)`
  font-size: ${typography.sizes.xs};
  line-height: auto;
`;
