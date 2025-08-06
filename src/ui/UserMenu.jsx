import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { AvatarIcon, MenuIcon } from "./Icons";
import { colors, flexRowCenter, spacing } from "../design-system";
import DropDown, { ListColumn } from "./DropDown";
import { BorderSm } from "./Borders";
import StyledLink from "./StyledLink";
// import { GlobeIcon, AvatarIcon, MenuIcon } from "./Icons";

const UserMenuWrapper = styled.div`
  ${flexRowCenter}
  gap: ${spacing.md};
  position: relative;
`;

const UserActionMenu = styled.button`
  ${flexRowCenter};
  gap: ${spacing.sm};
  padding: 0.8rem 0.8rem 0.8rem 1.6rem;
  border: 1px solid ${colors.border};
  border-radius: 100px;
  background-color: ${colors.background};
  cursor: pointer;

  &:hover {
    background-color: ${colors.border};
  }
  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: var(--shadow-sm);
      transition: box-shadow 0.3s;
    `}
`;

/**
 * A component where users can do these actions
 *  When logged in
    *  1. users can log out
    *  2. User can view reservation
    *  3. users can visit a page to change their details
*  When looged out
    1. User can login
    2. Users can signup
 *  */
const UserMenu = ({ isLoggedIn = false, colorTheme = null }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <UserMenuWrapper>
      {isLoggedIn ? (
        <NavText size="text-sm">Become a Host</NavText>
      ) : (
        <a colorTheme={colorTheme} as={Link} to="/login" size="text-sm">
          Become a Host
        </a>
      )}

      {/* <GlobeIcon colorTheme={colorTheme} /> */}
      <div>
        <UserActionMenu
          isActive={isOpen}
          onClick={() => setIsOpen((val) => !val)}
        >
          <MenuIcon />
          <AvatarIcon />
        </UserActionMenu>
        {isOpen && (
          <>
            <DropDown>
              <ListColumn>
                <li>
                  <StyledLink
                    $colorTheme="dark"
                    onClick={() => setIsOpen(false)}
                    to="login"
                  >
                    Log in
                  </StyledLink>
                </li>
                <li>
                  <StyledLink $colorTheme="dark" to="signup">
                    Sign up
                  </StyledLink>
                </li>
              </ListColumn>
              <BorderSm />
              <ListColumn>
                <li>
                  <StyledLink $colorTheme="dark" to="host">
                    Become a host
                  </StyledLink>
                </li>
                <li>
                  <StyledLink $colorTheme="dark" to="wishlist">
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
          </>
        )}
      </div>
    </UserMenuWrapper>
  );
};

export default UserMenu;
