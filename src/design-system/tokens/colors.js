/**
 * colors
 *
 * Defines the core color palette used across the design system.
 * Includes semantic tokens (e.g. `primary`, `error`, `surface`) and utility shades (`gray-500`, `card-1`, etc.).
 *
 * Usage:
 *   background-color: ${colors.surface};
 *   border-color: ${colors.border};
 */

export const colors = {
  // primary: "#FF385C",
  primary: "#DE3151",
  secondary: "#222222",
  background: "#fff",
  surface: "#F7F7F7",
  text: "#333333",
  muted: "#717171",
  darkBorder: "#b0b0b0",
  border: "#E5E5E5",
  error: "#E00000",
  danger: "#DE3151",
  white: "#fff",
  "gray-50": "#F9FAFB",
  "gray-200": "#E5E7EB",
  "gray-500": "#6B7280",
  "gray-600": "#4B5563",
  "gray-700": "#374151",
  black: "#000",
  "card-1": "#CC2D4A",
  "card-2": "#BC1A6E",
  "card-3": "#DE3151",
  "card-4": "#D93B30",
  yellow: "#F59E0B",
  blue: "#3B82F6",
  green: "#00C853",
};

/**
 * gradients
 *
 * Defines reusable gradient styles for backgrounds, buttons, and subtle overlays.
 * Each gradient is optimized for visual hierarchy and brand consistency.
 *
 * Usage:
 *   background-image: ${gradients.hero};
 */

export const gradients = {
  hero: "linear-gradient(135deg, #FF385C 0%, #FFB4A2 100%)",
  button: "linear-gradient(to right, #ff385c, #d70466)",
  subtle: "linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%)",
};

/**
 * textShadows
 *
 * Defines subtle text shadow presets for enhanced readability and depth.
 *
 * Usage:
 *   text-shadow: ${textShadows.smLight};
 */

export const textShadows = {
  smLight: "0 1px 2px rgba(0, 0, 0, 0.05);",
};

/**
 * boxShadow
 *
 * Defines elevation styles for UI elements using layered shadow presets.
 * Ranges from `xs` to `lg`, with semantic variants like `base` and `base-md`.
 *
 * Usage:
 *   box-shadow: ${boxShadow.md};
 */

export const boxShadow = {
  xs: "0 1px 2px #1f293714",
  sm: "0 2px 1.6rem rgba(0, 0, 0, 0.04)",
  md: "0 0.6rem 2.4rem rgba(0, 0, 0, 0.06)",
  lg: "0 2.4rem 3.2rem rgba(0, 0, 0, 0.12)",
  base: " 0 1px 2px #1F293714",
  "base-md": " 0 4px 6px #1f29371a;",
};
