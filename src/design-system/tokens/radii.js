/**
 * radii
 *
 * Defines border-radius values used across the design system for consistent rounding.
 * Includes semantic tokens for small and medium rounding, as well as utility shapes like pill and full.
 *
 * Keys:
 * - `sm`: Small rounding (0.8rem) — ideal for inputs and buttons
 * - `md`: Medium rounding (1.2rem) — used for cards and containers
 * - `pill`: Large horizontal rounding (100px) — for pill-shaped buttons or tags
 * - `full`: Maximum rounding (999px) — for perfect circles or avatars
 *
 * @example
 * const Button = styled.button`
 *   border-radius: ${radii.pill};
 * `;
 */

export const radii = {
  sm: "0.8rem",
  md: "1.2rem",
  pill: "100px",
  full: "999px",
};
