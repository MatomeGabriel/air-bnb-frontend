import { css } from "styled-components";
import { breakpoints } from "../tokens/breakpoints";
import { typography } from "../tokens/typography";
import { colors, textShadows } from "../tokens/colors";

// returns the color
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
