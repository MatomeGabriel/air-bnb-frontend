import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { colors, typography } from "../design-system";

/**
 * StyledLink
 * A themed NavLink with optional dark mode styling.
 *
 * @param {string} $colorTheme - Optional theme prop ("dark") to apply custom styles.
 * @returns {StyledComponent} A styled React Router link.
 */
const StyledLink = styled(NavLink)`
  ${({ $colorTheme }) =>
    $colorTheme === "dark" &&
    css`
      /* text-decoration: underline; */
      cursor: pointer;
      color: ${colors.secondary} !important;
      &:hover {
        color: ${colors.muted} !important;
      }

      &.active {
        font-weight: ${typography.weights.semiBold};
        color: ${colors.secondary};
      }
    `}
`;

export default StyledLink;
