import DropDown, { ListColumn } from "../../ui/DropDown";
import StyledLink from "../../ui/StyledLink";
import { BorderSm } from "../../ui/Borders";
import useLogout from "../../hooks/useLogout";
import { ROUTES } from "../../utils/routes";

export const UserDropdown = () => {
  const { logoutUser } = useLogout();

  const onSubmit = () => {
    logoutUser();
  };

  return (
    <DropDown>
      <ListColumn>
        <li>
          <StyledLink as="p" $colorTheme="dark" onClick={onSubmit}>
            Log out
          </StyledLink>
        </li>
        <li>
          <StyledLink $colorTheme="dark" to="/signup">
            View profile
          </StyledLink>
        </li>
      </ListColumn>
      <BorderSm />
      <ListColumn>
        <li>
          <StyledLink $colorTheme="dark" to="/signup/host">
            Manage reservations
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
  );
};
export const HostDropdown = () => {
  const { logoutUser } = useLogout();

  const onSubmit = () => {
    logoutUser();
  };

  return (
    <DropDown>
      <ListColumn>
        <li>
          <StyledLink as="p" $colorTheme="dark" onClick={onSubmit}>
            Log out
          </StyledLink>
        </li>
        <li>
          <StyledLink $colorTheme="dark" to="/signup">
            View profile
          </StyledLink>
        </li>
      </ListColumn>
      <BorderSm />
      <ListColumn>
        <li>
          <StyledLink $colorTheme="dark" to="/signup/host">
            Manage listings
          </StyledLink>
        </li>
        <li>
          <StyledLink $colorTheme="dark" to={ROUTES.createListing}>
            Create a listing
          </StyledLink>
        </li>
        <li>
          <StyledLink $colorTheme="dark" to="help">
            Help Center
          </StyledLink>
        </li>
      </ListColumn>
    </DropDown>
  );
};
