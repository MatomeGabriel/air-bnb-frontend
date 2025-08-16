import styled from "styled-components";
import { applyTypographyProps, colors, spacing } from "../design-system";

const StyledMidDot = styled.span`
  color: ${colors.border};
  ${applyTypographyProps}/* padding: 0 ${spacing.xxs}; */
`;
const Middot = ({ $color }) => {
  return <StyledMidDot $color={$color}>&middot;</StyledMidDot>;
};

export default Middot;
