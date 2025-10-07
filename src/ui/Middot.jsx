import styled from "styled-components";
import { applyTypographyProps, colors, spacing } from "../design-system";

const StyledMidDot = styled.span`
  color: ${colors.border};
  ${applyTypographyProps}; /* padding: 0 ${spacing.xxs}; */
`;

/**
 * Middot component
 * Renders a styled middle dot (·) with optional typography props.
 *
 * @param {Object} props
 * @param {string} props.$color - Optional color override.
 *
 * @returns {JSX.Element} A styled span containing a middle dot.
 */

const Middot = ({ $color }) => {
  return <StyledMidDot $color={$color}>&middot;</StyledMidDot>;
};

export default Middot;
