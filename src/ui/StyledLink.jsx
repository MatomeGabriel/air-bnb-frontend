import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { colors, typography } from "../design-system";

const StyledLink = styled(NavLink)`
  ${({ $colorTheme }) =>
    $colorTheme === "dark" &&
    css`
      text-decoration: none;
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
