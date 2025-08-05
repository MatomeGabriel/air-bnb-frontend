import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
// import { GlobeIcon, AvatarIcon, MenuIcon } from "./Icons";

const UserMenuWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const UserActionMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 0.8rem 0.8rem 0.8rem 1.6rem;
  border: 1px solid var(--color-gray-200);
  border-radius: var(--border-radius-pill);
  cursor: pointer;
  background-color: var(--color-white);

  &:hover {
    background-color: var(--color-gray-100);
  }
  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: var(--shadow-sm);
      transition: box-shadow 0.3s;
    `}
`;

const UserDropDown = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 20rem;
  list-style: none;
  padding: 0.8rem 0;
  margin-top: 0.5rem;
  box-shadow: var(--shadow-xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--border-radius-sm);
  z-index: 100;
  & li {
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
  }
  & a:link,
  & a:visited {
    color: var(--color-black);
    text-decoration: none;
    padding: 0.8rem 2.4rem;
  }

  & a:hover,
  &a:active {
    background-color: var(--color-gray-100);
  }
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
          {/* <MenuIcon /> */}
          {/* <AvatarIcon /> */}
        </UserActionMenu>
        {isOpen && (
          <>
            <UserDropDown>
              <li>
                <Link to="login">Login</Link>
              </li>
              <li>
                <Link to="signup">Signup</Link>
              </li>
            </UserDropDown>
          </>
        )}
      </div>
    </UserMenuWrapper>
  );
};

export default UserMenu;
