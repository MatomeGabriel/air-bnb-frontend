/**
 * typography
 *
 * Defines global typography tokens for font sizing, weight, line height, and font family.
 * Used across the design system to ensure consistent text styling and scalable UI.
 *
 * Properties:
 * - `fontFamily`: Base font stack used throughout the app
 * - `sizes`: Font size scale from `xxs` to `xxl`, mapped to `rem` units
 * - `weights`: Font weight scale from regular to bold
 * - `lineHeights`: Line height presets for tight, normal, and relaxed spacing
 *
 * @example
 * const headingStyle = {
 *   fontSize: typography.sizes["2xl"],
 *   fontWeight: typography.weights.bold,
 *   lineHeight: typography.lineHeights.relaxed,
 * };
 */

export const typography = {
  fontFamily: `'Inter', sans-serif`,
  sizes: {
    xxs: "1rem",
    xs: "1.2rem", // 12px
    sm: "1.4rem", // 14px
    md: "1.6rem", // 16px
    base: "1.6rem", // 16px
    lg: "1.8rem",
    xl: "2rem",
    "2xl": "2.4rem",
    "3xl": "3rem",
    "4xl": "3.6rem",
    "5xl": "4.8rem",
    xxl: "9.6rem",
  },

  weights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  lineHeights: {
    tight: "1.2",
    normal: "1.5",
    relaxed: "1.75",
  },
};
