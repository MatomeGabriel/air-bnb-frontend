import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { NavLink } from "react-router-dom";
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
import { SearchEmpty, SearchFilled } from "./SearchBars";
import MobileNav from "../features/authentication/MobileNav";
import { MenuFilters, SearchFilters } from "./Filters";
import { FlexColumn } from "./Flex";
import { ROUTES } from "../utils/routes";

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

const Navbar = styled.nav`
  ${flexRowCenter}
  border-top: 1px solid ${colors.border};
  background-color: ${colors.background};
  /* gap: ${spacing.xs}; */
  position: fixed;
  left: 0;
  z-index: 10;
  bottom: ${spacing.xxs};
  height: 5.5rem;
  width: 100%;
  max-width: 100%;
  transition: all 0.3s;

  @media (min-width: ${breakpoints.md}) {
    all: unset;
    ${flexRowBetween}
    gap: ${spacing.lg};
    width: 100%;
    /* padding: 1.6rem 8rem 2.4rem 8rem; */
  }
`;

/**
 *
 * @returns
 */
const MainMenu = ({ showSearchBar, filterArr }) => {
  const isMobile = useMedia(`(max-width: ${breakpoints.md}`);
  const { pathname } = useLocation();

  const isNotHome = !(pathname === "/");
  const isLocations = pathname === ROUTES.viewLocations;

  return (
    <FlexColumn $width="100%" $gap="lg">
      <Navbar>
        {/* if the media is for mobile display the mobile menu */}
        {isMobile ? (
          <>
            <MobileNav />
          </>
        ) : (
          <>
            <Logo $color={isNotHome ? colors.primary : colors.surface} />

            {/* display the search when the page is not home */}
            {/* pass props to display search and type of search as an object */}
            {!isNotHome && <NavList />}

            {showSearchBar?.emptySearch && <SearchEmpty />}
            {showSearchBar?.filledSearch && <SearchFilled />}

            <UserMenu isNotHome={isNotHome} />
          </>
        )}
      </Navbar>
      <MenuFilters filterArr={filterArr} />
      {isLocations && <SearchFilters />}
    </FlexColumn>
  );
};

export default MainMenu;

/**
 * how it behave at small screen it sits on the bottom of the screen
 *  height 125px
 *
 *
 */
