import styled from "styled-components";
import { colors, flexColumnStart, spacing, typography } from "../design-system";

const StyledDropDown = styled.div`
  ${flexColumnStart}
  font-size: ${typography.sizes.sm};
  border-radius: ${spacing.md};
  background-color: ${colors.surface};
  z-index: 100;
  position: absolute;
  margin-top: ${spacing.xs};
  top: 100%;
  right: 0;
  width: 23.3rem;
  box-shadow: 0 4px 1.8rem rgba(black, 0.1);

  & a {
    text-decoration: none;
    color: ${colors.secondary};
  }
`;

export const ListColumn = styled.ul`
  ${flexColumnStart};
  gap: ${spacing.lg};
  padding: ${spacing.lg};
  list-style: none;
`;
const DropDown = ({ children }) => {
  return <StyledDropDown>{children}</StyledDropDown>;
};

export default DropDown;
