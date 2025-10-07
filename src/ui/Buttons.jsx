import styled from "styled-components";
import {
  applyBackgroundColor,
  applyFlexProps,
  boxShadow,
  colors,
  flexRowCenter,
  gradients,
  radii,
  spacing,
  typography,
} from "../design-system";

/**
 * ButtonBase
 * Core button style shared across all variants.
 * Includes flex layout, font sizing, border radius, padding, and hover shadow.
 *
 * Props:
 * - $radius: Optional radius key from design system (e.g., "pill", "sm")
 * - $width: Optional custom width
 */
export const ButtonBase = styled.button`
  ${flexRowCenter};
  color: ${colors.white};
  border-radius: ${spacing.sm};
  font-size: ${typography.sizes.sm};
  line-height: ${typography.lineHeights.tight};
  gap: ${spacing.sm};
  font-weight: ${typography.weights.medium};
  border: none;
  height: 3.6rem;
  padding: 0 ${spacing.md};
  width: auto;
  border-radius: ${({ $radius }) => $radius && radii[$radius || "pill"]};
  ${({ $width }) =>
    $width &&
    `
    width: ${$width}!important;
  `}

  &:hover {
    box-shadow: ${boxShadow.sm};
  }
  ${applyBackgroundColor};
`;

/**
 * ButtonPrimarySm
 * Small gradient button with animated hover effect.
 * Used for primary actions in compact layouts.
 */
export const ButtonPrimarySm = styled(ButtonBase)`
  background: ${gradients.button};
  background-size: 200% 100%;
  background-position: left center;
  transition: background-position 0.3s ease;
  &:hover {
    background-position: right center;
  }
  &:disabled {
    background-color: ${colors.muted};
    color: ${colors.white};
  }
`;

/**
 * ButtonPrimarySmFull
 * Full-width version of ButtonPrimarySm.
 */
export const ButtonPrimarySmFull = styled(ButtonPrimarySm)`
  width: 100%;
`;

/**
 * ButtonPrimaryMd
 * Medium-height version of ButtonPrimarySm.
 */
export const ButtonPrimaryMd = styled(ButtonPrimarySm)`
  height: 4.4rem;
`;

/**
 * ButtonPrimaryMdFull
 * Full-width medium-height primary button.
 */
export const ButtonPrimaryMdFull = styled(ButtonPrimarySmFull)`
  height: 4.4rem;
`;
/**
 * ButtonPrimaryFormFull
 * Full-width button for form submissions with slightly increased height.
 */
export const ButtonPrimaryFormFull = styled(ButtonPrimarySmFull)`
  height: 4.8rem;
`;

/**
 * ButtonPrimaryLg
 * Large-height version of ButtonPrimarySm.
 */
export const ButtonPrimaryLg = styled(ButtonPrimarySm)`
  height: 5.6rem;
`;
/**
 * ButtonPrimaryLgFull
 * Full-width large-height primary button.
 */
export const ButtonPrimaryLgFull = styled(ButtonPrimarySmFull)`
  height: 5.6rem;
`;

/**
 * ButtonSolidSm
 * Small solid-colored button with hover elevation and brightness effect.
 *
 * Props:
 * - $color: Optional color key from design system (e.g., "primary", "secondary")
 */
export const ButtonSolidSm = styled(ButtonBase)`
  background-color: ${({ $color }) => colors[$color || "primary"]};
  transition: all 0.3s, translate3d 0.3s;
  &:hover {
    /* opacity: 0.85; */
    filter: brightness(0.9);
    box-shadow: ${boxShadow.md};
    transform: translate3d(0, -0.2rem, 0);
  }
`;
/**
 * ButtonSolidMd
 * Medium-sized solid button with pill radius and extra padding.
 */
export const ButtonSolidMd = styled(ButtonSolidSm)`
  padding: 0 2.4rem;
  height: 4.4rem;
  border-radius: ${({ $radius }) => radii[$radius || "pill"]};
`;
/**
 * ButtonSolidDarkMdFull
 * Full-width medium button with dark background and white text.
 */
export const ButtonSolidDarkMdFull = styled(ButtonSolidMd)`
  background-color: ${colors.secondary};
  color: ${colors.white};
  width: 100%;
`;
/**
 * ButtonSolidLg
 * Large solid button with pill radius and extra padding.
 */
export const ButtonSolidLg = styled(ButtonSolidSm)`
  padding: 0 2.4rem;
  height: 5.6rem;
  border-radius: ${({ $radius }) => radii[$radius || "pill"]};
`;
/**
 * ButtonSolidLightLg
 * Large button with white background and dark text.
 */
export const ButtonSolidLightLg = styled(ButtonSolidLg)`
  background-color: ${colors.white};
  color: ${colors.secondary};
`;

/**
 * ButtonSolidDarkLg
 * Large button with dark background and white text.
 */
export const ButtonSolidDarkLg = styled(ButtonSolidLg)`
  background-color: ${colors.secondary};
  color: ${colors.white};
`;

/**
 * IconButton
 * Minimal button for icons only.
 * No background or border by default.
 * Includes flex layout and optional background/flex props.
 */
export const IconButton = styled.button`
  border: none;
  background: none;
  &:hover {
    filter: brightness(0.85);
  }
  ${flexRowCenter};
  ${applyFlexProps};
  ${applyBackgroundColor};
`;

/**
 * ButtonOutlineDarkSm
 * Small outlined button with dark border and hover color transition.
 */
export const ButtonOutlineDarkSm = styled(ButtonBase)`
  background-color: ${colors.white};
  border: 1px solid ${colors.secondary};
  color: ${colors.secondary};
  transition: all 0.3s;
  &:hover {
    border: 1px solid #777;
    color: #777;
  }
`;

/**
 * ButtonOutlineDarkMdFull
 * Full-width medium version of ButtonOutlineDarkSm.
 */
export const ButtonOutlineDarkMdFull = styled(ButtonOutlineDarkSm)`
  height: 4.4rem;
  width: 100%;
`;

/**
 * ButtonOutlineDarkForm
 * Medium-height outlined button for form use.
 */
export const ButtonOutlineDarkForm = styled(ButtonOutlineDarkSm)`
  height: 4.8rem;
`;

/**
 * ButtonOutline
 * Generic outlined button with customizable color and radius.
 *
 * Props:
 * - $color: Optional color key for border and text
 * - $radius: Optional radius key from design system
 */
export const ButtonOutline = styled(ButtonBase)`
  background-color: ${colors.white};
  border: 1px solid ${({ $color }) => colors[$color] || colors["gray-200"]};
  color: ${({ $color }) => colors[$color] || colors["gray-700"]};
  border-radius: ${({ $radius }) => radii[$radius || "pill"]};
  box-shadow: ${boxShadow.xs};
`;
