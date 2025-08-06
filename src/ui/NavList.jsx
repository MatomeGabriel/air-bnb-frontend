import styled, { css } from "styled-components";
import { colors, flexRowCenter, spacing } from "../design-system";
import { Link, NavLink } from "react-router-dom";

const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 3rem;
`;

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
