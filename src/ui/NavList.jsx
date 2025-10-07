import styled from "styled-components";
import { colors, flexRowCenter, spacing } from "../design-system";
import { NavLink } from "react-router-dom";

/**
 * Styled unordered list for navigation items.
 * Horizontally spaced with no default list styling.
 */
const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 3rem;
`;

/**
 * Styled list item for navigation.
 * Centers content and adds an underline indicator for active links.
 */
const NavItem = styled.li`
  ${flexRowCenter}
  position: relative;

  .active::after {
    content: "";
    position: absolute;
    top: 100%;
    display: block;
    width: 1.6rem;
    height: 2px;
    background-color: ${colors.background};
    margin-top: 1rem;
    border-radius: ${spacing.xs};
  }

  & a {
    ${flexRowCenter}
    text-decoration: none;
    color: ${colors.background};
  }
`;
/**
 * NavList component
 * Renders a horizontal navigation menu with three links.
 *
 * @returns {JSX.Element} Navigation list with styled links.
 */
const NavList = () => {
  return (
    <StyledNavList>
      <NavItem>
        <NavLink to="">Places to stay</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/experinces">Experiences</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="online">Online Experiences</NavLink>
      </NavItem>
    </StyledNavList>
  );
};

export default NavList;
