import { css } from "styled-components";
import { applyColor, applyCSSProperty } from "./mixins";
import { typography } from "../tokens/typography";
import { spacing } from "../tokens/spacing";
import { colors } from "../tokens/colors";

/**
 * applyFlexProps
 *
 * Applies dynamic flexbox properties based on component props.
 * Supports `justify-content`, `align-items`, `flex-direction`, `gap`, and `width`.
 *
 * @param {Object} props - Component props containing optional flex-related keys
 * @param {string} [props.$justify] - Justify content value
 * @param {string} [props.$align] - Align items value
 * @param {string} [props.$direction] - Flex direction value
 * @param {string} [props.$gap] - Gap value (mapped from spacing tokens)
 * @param {string} [props.$width] - Width value
 *
 * @returns {FlattenSimpleInterpolation} Styled-components CSS block
 */

export const applyFlexProps = (props) => css`
  ${applyCSSProperty("justify-content", props.$justify)};
  ${applyCSSProperty("align-items", props.$align)};
  ${applyCSSProperty("flex-direction", props.$direction)};
  ${applyCSSProperty("gap", props.$gap, spacing)};
  ${applyCSSProperty("width", props.$width)};
`;

/**
 * applyTypographyProps
 *
 * Applies dynamic typography styles based on component props.
 * Supports color, font weight, text decoration, alignment, and transformation.
 *
 * @param {Object} props - Component props containing typography-related keys
 * @param {string} [props.$color] - Text color (mapped from color tokens)
 * @param {string} [props.$weight] - Font weight (mapped from typography weights)
 * @param {string} [props.$decoration] - Text decoration (e.g. underline)
 * @param {string} [props.$textAlign] - Text alignment
 * @param {string} [props.$textTransform] - Text transform (e.g. capitalize)
 *
 * @returns {FlattenSimpleInterpolation} Styled-components CSS block
 */
export const applyTypographyProps = (props) => css`
  ${applyColor(props.$color)};
  ${applyCSSProperty("font-weight", props.$weight, typography.weights)};
  ${applyCSSProperty("text-decoration", props.$decoration)};
  ${applyCSSProperty("text-align", props.$textAlign)};
  ${applyCSSProperty("text-transform", props.$textTransform)};
`;

/**
 * applyBackgroundColor
 *
 * Applies background color styles based on `$bgColor` prop.
 * Supports both `background-color` and `background` for flexibility.
 *
 * @param {Object} props - Component props containing `$bgColor`
 * @param {string} [props.$bgColor] - Background color (mapped from color tokens)
 *
 * @returns {FlattenSimpleInterpolation} Styled-components CSS block
 */
export const applyBackgroundColor = (props) => css`
  ${applyCSSProperty("background-color", props.$bgColor, colors)};
  ${applyCSSProperty("background", props.$bgColor, colors)};
`;

/**
 * applySpacing
 *
 * Applies spacing-related styles such as width, height, padding, and margin.
 * Values are mapped from spacing tokens.
 *
 * @param {Object} props - Component props containing spacing keys
 * @param {string} [props.$width] - Width value
 * @param {string} [props.$height] - Height value
 * @param {string} [props.$padding] - Padding value (mapped from spacing tokens)
 * @param {string} [props.$margin] - Margin value (mapped from spacing tokens)
 *
 * @returns {FlattenSimpleInterpolation} Styled-components CSS block
 */
export const applySpacing = (props) => css`
  ${applyCSSProperty("width", props.$width)};
  ${applyCSSProperty("height", props.$height)};
  ${applyCSSProperty("padding", props.$padding, spacing)};
  ${applyCSSProperty("margin", props.$margin, spacing)};
`;

/**
 * applySquareSize
 *
 * Applies equal width and height based on either `$width` or `$height` prop.
 * Useful for square icons, buttons, or containers.
 *
 * @param {Object} props - Component props containing `$width` or `$height`
 * @param {string} [props.$width] - Width value (mapped from spacing tokens)
 * @param {string} [props.$height] - Height value (mapped from spacing tokens)
 *
 * @returns {FlattenSimpleInterpolation} Styled-components CSS block
 */
export const applySquareSize = (props) => css`
  ${applyCSSProperty("width", props.$width || props.$height, spacing)};
  ${applyCSSProperty("height", props.$height || props.$width, spacing)};
`;

/**
 * applySquareSize
 *
 * Applies equal width and height based on either `$width` or `$height` prop.
 * Useful for square icons, buttons, or containers.
 *
 * @param {Object} props - Component props containing `$width` or `$height`
 * @param {string} [props.$width] - Width value (mapped from spacing tokens)
 * @param {string} [props.$height] - Height value (mapped from spacing tokens)
 *
 * @returns {FlattenSimpleInterpolation} Styled-components CSS block
 */
export const applySvgProps = (props) => css`
  & path {
    ${applyCSSProperty("fill", props.$fill, colors)};
    ${applyCSSProperty("stroke", props.$stroke, colors)};
  }
`;
