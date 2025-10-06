import styled from "styled-components";
import { HeartOutline, ProfileOutline, SearchIcon } from "../../ui/Icons";
import { NavLink } from "react-router-dom";

import {
  colors,
  flexColumnCenter,
  radii,
  spacing,
  typography,
} from "../../design-system";
import useCurrentUser from "../../hooks/useCurrentUser";
import { ROUTES } from "../../utils/routes";

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

const Img = styled.img`
  object-fit: cover;
  width: 3.2rem !important ;
  height: 3.2rem !important ;
  border-radius: ${radii.full};
`;
const MobileNav = () => {
  const { user, isLoading, isLoggedIn } = useCurrentUser();

  if (isLoading) return <p>Loading</p>;

  return (
    <>
      <IconLink to={ROUTES.home}>
        <SearchIcon />
        <span>Explore</span>
      </IconLink>
      <IconLink to="/test">
        <HeartOutline />
        <span>Wishlist</span>
      </IconLink>
      <IconLink to={isLoggedIn ? ROUTES.profile : ROUTES.login}>
        {isLoggedIn ? (
          <Img src={user.photo} />
        ) : (
          <>
            <ProfileOutline />
            <span>Login</span>
          </>
        )}
      </IconLink>
    </>
  );
};

export default MobileNav;
