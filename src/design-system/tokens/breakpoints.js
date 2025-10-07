/**
 * breakpoints
 *
 * Defines the responsive design breakpoints used throughout the design system.
 * Values are expressed in `em` units to scale with root font size and support accessibility.
 *
 * Keys:
 * - `sm`: Small screens (typically mobile) — 30em (~480px)
 * - `md`: Medium screens (typically tablets) — 48em (~768px)
 * - `lg`: Large screens (typically desktops) — 64em (~1024px)
 * - `xl`: Extra-large screens (typically wide monitors) — 80em (~1280px)
 *
 * @example
 * const isMobile = useMedia(`(max-width: ${breakpoints.md})`);
 */

export const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "64em",
  xl: "80em",
};
