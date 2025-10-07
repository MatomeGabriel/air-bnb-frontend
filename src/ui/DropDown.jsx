import styled from "styled-components";
import { colors, flexColumnStart, spacing, typography } from "../design-system";

/**
 * StyledDropDown
 * A styled dropdown container with padding, shadow, and vertical layout.
 * Positioned absolutely below its trigger element.
 */
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
/**
 * ListColumn
 * A vertical list layout for dropdown items.
 * Removes default list styling and adds spacing.
 */
export const ListColumn = styled.ul`
  ${flexColumnStart};
  gap: ${spacing.lg};
  padding: ${spacing.lg};
  list-style: none;
`;

/**
 * DropDown
 * Wrapper component for rendering dropdown content.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Dropdown content to display.
 * @returns {JSX.Element}
 */
const DropDown = ({ children }) => {
  return <StyledDropDown>{children}</StyledDropDown>;
};

export default DropDown;
