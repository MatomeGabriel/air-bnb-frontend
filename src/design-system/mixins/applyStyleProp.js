import { css } from "styled-components";
import { applyColor, applyCSSProperty } from "./mixins";
import { typography } from "../tokens/typography";
import { spacing } from "../tokens/spacing";
import { colors } from "../tokens/colors";

export const applyFlexProps = (props) => css`
  ${applyCSSProperty("justify-content", props.$justify)};
  ${applyCSSProperty("align-items", props.$align)};
  ${applyCSSProperty("flex-direction", props.$direction)};
  ${applyCSSProperty("gap", props.$gap, spacing)};
  ${applyCSSProperty("width", props.$width)};
`;

export const applyTypographyProps = (props) => css`
  ${applyColor(props.$color)};
  ${applyCSSProperty("font-weight", props.$weight, typography.weights)};
  ${applyCSSProperty("text-decoration", props.$decoration)};
  ${applyCSSProperty("text-align", props.$textAlign)};
`;

export const applyBackgroundColor = (props) => css`
  ${applyCSSProperty("background-color", props.$bgColor, colors)};
`;

export const applySpacing = (props) => css`
  ${applyCSSProperty("width", props.$width)};
  ${applyCSSProperty("height", props.$height)};
  ${applyCSSProperty("padding", props.$padding, spacing)};
  ${applyCSSProperty("margin", props.$margin, spacing)};
`;

export const applySquareSize = (props) => css`
  ${applyCSSProperty("width", props.$width || props.$height, spacing)};
  ${applyCSSProperty("height", props.$height || props.$width, spacing)};
`;
export const applySvgProps = (props) => css`
  & path {
    ${applyCSSProperty("fill", props.$fill, colors)};
    ${applyCSSProperty("stroke", props.$stroke, colors)};
  }
`;
