/**
 * Typography & Style Utilities
 *
 * A set of reusable functions and CSS snippets for applying dynamic styles via styled-components.
 * These utilities help enforce design tokens and responsive behavior across the UI.
 *
 * Functions:
 * - `applyColor($color)`: Applies a text color from the `colors` token map.
 * - `applyResponsiveFontSize($size)`: Applies a responsive font size and line-height for medium screens and up.
 * - `applyTextShadow($textShadow)`: Applies a text shadow from the `textShadows` token map.
 * - `applyCSSProperty(cssProp, $val, token)`: Generic utility to apply any CSS property using optional token mapping.
 *
 * Constants:
 * - `textBase`: Base paragraph style with consistent font size, line height, weight, and color.
 *
 * @example
 * const StyledText = styled.p`
 *   ${textBase}
 *   ${applyColor("gray-600")}
 *   ${applyResponsiveFontSize("lg")}
 * `;
 */

import { css } from "styled-components";
import { breakpoints } from "../tokens/breakpoints";
import { typography } from "../tokens/typography";
import { colors, textShadows } from "../tokens/colors";

export const applyColor = ($color) =>
  $color &&
  css`
    color: ${colors[$color]};
  `;

export const applyResponsiveFontSize = ($size) =>
  $size &&
  css`
    @media (min-width: ${breakpoints.md}) {
      line-height: 1.2;
      font-size: ${typography.sizes[$size]};
    }
  `;

export const applyTextShadow = ($textShadow) =>
  $textShadow &&
  css`
    text-shadow: ${textShadows[$textShadow]};
  `;

export const applyCSSProperty = (cssProp, $val, token) => {
  if (!$val) return "";
  const value = token ? token[$val] : $val;
  return `${cssProp} : ${value}`;
};

export const textBase = css`
  font-size: ${typography.sizes.base};
  line-height: 1.4;
  font-weight: 400;
  color: ${colors.secondary};
`;
