/**
 * generateResponsiveStyles
 *
 * Generates a responsive style object using media queries based on design system breakpoints.
 * Useful for applying dynamic styles (e.g. padding, font-size, grid layout) across screen sizes.
 *
 * @param {string} cssProp - The CSS property to apply (e.g. "padding", "font-size")
 * @param {Object} values - An object mapping breakpoint keys (`sm`, `md`, `lg`, `xl`) to CSS values
 * @returns {Object} A style object with media query keys and corresponding CSS property-value pairs
 *
 * @example
 * const styles = generateResponsiveStyles("padding", {
 *   sm: "1rem",
 *   md: "2rem",
 *   lg: "3rem",
 * });
 *
 * // Output:
 * {
 *   "@media(min-width: 30em)": { padding: "1rem" },
 *   "@media(min-width: 48em)": { padding: "2rem" },
 *   "@media(min-width: 64em)": { padding: "3rem" }
 * }
 */

import { breakpoints } from "../tokens/breakpoints";

export const generateResponsiveStyles = (cssProp, values) => {
  // value = {sm: 'val', md: 'val'}
  const styles = {};
  Object.entries(values).forEach(([query, cssVal]) => {
    styles[`@media(min-width: ${breakpoints[query]})`] = {
      [cssProp]: cssVal,
    };
  });

  //
  return styles;
};
