import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import useCurrentUser from "../hooks/useCurrentUser";
import { AvatarIcon, GlobeIcon, MenuIcon } from "./Icons";

import {
  applyTypographyProps,
  boxShadow,
  colors,
  flexRowCenter,
  radii,
  spacing,
} from "../design-system";

import DropDown, { ListColumn } from "./DropDown";
import { BorderSm } from "./Borders";
import StyledLink from "./StyledLink";
import { TextSm } from "./Paragraphs";
import { generateImgURL } from "../utils/generateImgURL";
import { IconButton } from "./Buttons";
import {
  HostDropdown,
  UserDropdown,
} from "../features/authentication/LoggedInDropdown";
// import { GlobeIcon, AvatarIcon, MenuIcon } from "./Icons";

const UserMenuWrapper = styled.div`
  ${flexRowCenter}
  gap: ${spacing.md};
  position: relative;
`;

const UserActionMenu = styled.button`
  ${flexRowCenter};
  gap: ${spacing["sm-md"]};
  /* padding: 0.8rem 0.8rem 0.8rem 1.6rem; */
  padding: 0.4rem 0.6rem 0.4rem 1.2rem;
  border: 1px solid ${colors.border};
  background-color: ${colors.white};
  border-radius: ${radii.pill};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${colors.surface};
    box-shadow: ${boxShadow.base};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: ${boxShadow.base};
      border-color: ${colors.secondary};
    `}
`;

const HostLink = styled(NavLink)`
  ${applyTypographyProps};
  text-decoration: none;
  &:hover {
    filter: brightness(0.8);
  }
`;

const Img = styled.img`
  object-fit: cover;
  border-radius: ${radii.full};
  width: 3.6rem;
  height: 3.6rem;
`;

const UserMenu = ({ isNotHome }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { user, isLoading, isLoggedIn } = useCurrentUser();

  const $color = isNotHome ? "secondary" : "white";
  // IMPLEMENT A LOADER

  return (
    <UserMenuWrapper>
      {isLoggedIn ? (
        <TextSm $color={$color} size="text-sm">
          Welcome, {user.name}
        </TextSm>
      ) : (
        <HostLink $color={$color} to="/signup/host">
          Become a Host
        </HostLink>
      )}
      <IconButton>
        <GlobeIcon $stroke={$color} />
      </IconButton>

      <div>
        <UserActionMenu
          isActive={isOpen}
          onClick={() => setIsOpen((val) => !val)}
        >
          {/* LOADING */}
          <MenuIcon />
          {isLoggedIn ? (
            <Img src={generateImgURL(user.photo)} />
          ) : (
            <AvatarIcon />
          )}
        </UserActionMenu>
        {isOpen && (
          <>
            {isLoggedIn && user.role === "host" && <HostDropdown />}
            {isLoggedIn && user.role === "user" && <UserDropdown />}
            {!isLoggedIn && (
              <DropDown>
                <ListColumn>
                  <li>
                    <StyledLink
                      $colorTheme="dark"
                      onClick={() => setIsOpen(false)}
                      to="/login"
                    >
                      Log in
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink $colorTheme="dark" to="/signup">
                      Sign up
                    </StyledLink>
                  </li>
                </ListColumn>
                <BorderSm />
                <ListColumn>
                  <li>
                    <StyledLink $colorTheme="dark" to="/signup/host">
                      Become a host
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink $colorTheme="dark" to="/wishlist">
                      Wishlist
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink $colorTheme="dark" to="help">
                      Help Center
                    </StyledLink>
                  </li>
                </ListColumn>
              </DropDown>
            )}
          </>
        )}
      </div>
    </UserMenuWrapper>
  );
};

export default UserMenu;

/**
 * A component where users can do these actions
 *  When logged in
    *  1. users can log out
    *  2. User can view reservation
    *  3. users can visit a page to change their details
*  When logged out
    1. User can login
    2. Users can signup
 *  */
