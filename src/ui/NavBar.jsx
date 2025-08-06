import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HeartOutline, ProfileOutline, SearchIcon } from "../ui/Icons";
import {
  colors,
  typography,
  flexColumnCenter,
  spacing,
  flexRowCenter,
  breakpoints,
  flexRowBetween,
} from "../design-system/index";
import useMedia from "../hooks/useMedia";
import Logo from "./Logo";
import NavList from "./NavList";
import UserMenu from "./UserMenu";
import DropDown from "./DropDown";

const IconLink = styled(NavLink)`
  /* 1 import mixins */
  ${flexColumnCenter}
  /* 2. tokens */
  color: ${colors.muted};
  font-size: ${typography.sizes.xs};
  gap: ${spacing.xss};

  /* 4. text based */
  text-decoration: none;

  /* 5. container based */
  flex: 1;
  max-width: 7.5rem;
  height: 3.9rem;
  padding: 0 2px;
`;

const StyledNavBar = styled.nav`
  ${flexRowCenter}
  border-top: 1px solid ${colors.border};
  background-color: ${colors.background};
  /* gap: ${spacing.xs}; */
  position: fixed;
  bottom: ${spacing.xxs};
  height: 5.5rem;
  width: 100%;
  transition: all 0.3s;

  @media (min-width: ${breakpoints.md}) {
    all: unset;
    ${flexRowBetween}
    gap: ${spacing.lg};
    padding: 1.6rem 8rem 2.4rem 8rem;
  }
`;

const NavBar = () => {
  const isMobile = useMedia(`(max-width: ${breakpoints.md}`);
  return (
    <StyledNavBar>
      {/* if the media is for mobile display the mobile menu */}
      {isMobile ? (
        <>
          <IconLink to="/">
            <SearchIcon />
            <span>Explore</span>
          </IconLink>
          <IconLink to="/test">
            <HeartOutline />
            <span>Wishlist</span>
          </IconLink>
          <IconLink to="/test2">
            <ProfileOutline />
            <span>Login</span>
          </IconLink>
        </>
      ) : (
        <>
          <Logo $color={colors.surface} />
          <NavList />
          <UserMenu />
          {/* <DropDown /> */}
        </>
      )}
    </StyledNavBar>
  );
};

export default NavBar;

/**
 * how it behave at small screen it sits on the bottom of the screen
 *  height 125px
 *
 *
 */
