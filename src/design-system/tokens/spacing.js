/**
 * spacing
 *
 * Defines a consistent spacing scale used throughout the design system.
 * Values are expressed in `rem` units to support responsive and accessible layouts.
 *
 * Keys range from `xxs` to `4xl`, covering micro to macro spacing needs.
 * Includes a `"sm-md"` hybrid step and a `"base"` alias for `md` to support semantic usage.
 *
 * @example
 * const Card = styled.div`
 *   padding: ${spacing.lg};
 *   margin-bottom: ${spacing["2xl"]};
 * `;
 */

export const spacing = {
  xxs: "0.2rem",
  xs: "0.4rem",
  sm: "0.8rem",
  "sm-md": "1.2rem",
  md: "1.6rem",
  base: "1.6rem",
  lg: "2.4rem",
  xl: "3.2rem",
  "2xl": "4.8rem",
  "3xl": "6.4rem",
  "4xl": "9.6rem",
};
