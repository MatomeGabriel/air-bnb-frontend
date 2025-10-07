import styled, { css } from "styled-components";
import { colors, headingBase, textShadows, typography } from "../design-system";
import {
  applyColor,
  applyResponsiveFontSize,
  applyTextShadow,
} from "../design-system/mixins/mixins";

/**
 * Heading
 * A customizable <h1> element with dynamic size, color, and text shadow.
 * Adds special styling when $size is "xxl".
 *
 * Props:
 * - $size: Typography size key (e.g., "2xl", "xxl")
 * - $color: Color key from design system
 * - $textShadow: Text shadow key from design system
 */
const Heading = styled.h1`
  font-size: ${({ $size }) => typography.sizes[$size || "2xl"]};
  color: ${({ $color }) => colors[$color || "secondary"]};
  text-shadow: ${({ $textShadow }) => textShadows[$textShadow]};

  ${({ $size }) =>
    $size === "xxl" &&
    css`
      width: 46.5rem;
      line-height: 1;
    `}
`;

/**
 * H1
 * Styled <h1> with base heading styles and responsive font sizing.
 *
 * Props:
 * - $color: Optional color key
 * - $size: Optional size key
 * - $textShadow: Optional text shadow key
 */
export const H1 = styled.h1`
  ${headingBase}
  font-size: 2.4rem;
  ${({ $color }) => applyColor($color)}
  ${({ $size }) => applyResponsiveFontSize($size)}
  ${({ $textShadow }) => applyTextShadow($textShadow)}
`;
/**
 * H2
 * Styled <h2> with base heading styles and responsive font sizing.
 *
 * Props:
 * - $color: Optional color key
 * - $size: Optional size key
 */
export const H2 = styled.h2`
  ${headingBase}
  font-size: 2rem;
  ${({ $color }) => applyColor($color)}
  ${({ $size }) => applyResponsiveFontSize($size)}
`;

/**
 * H3
 * Styled <h3> with base heading styles and responsive font sizing.
 *
 * Props:
 * - $color: Optional color key
 * - $size: Optional size key
 */
export const H3 = styled.h3`
  ${headingBase}
  font-size:1.8rem;
  ${({ $color }) => applyColor($color)}
  ${({ $size }) => applyResponsiveFontSize($size)}
`;

export default Heading;
