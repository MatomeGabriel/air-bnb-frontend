import styled from "styled-components";
import { TextSm } from "./Paragraphs";
import {
  boxShadow,
  colors,
  flexRowBetween,
  radii,
  spacing,
} from "../design-system";
import { IconButton } from "./Buttons";
import { SearchIcon, SearchIconSm } from "./Icons";
import { useLocation } from "react-router-dom";

const StyledSearchBar = styled.div`
  ${flexRowBetween};
  max-width: 30rem;
  height: 4.8rem;
  flex: 1;
  border-radius: ${radii.pill};
  border: 1px solid ${colors["gray-200"]};
  padding: 0.8rem 0.8rem 0.8rem 2.4rem;
  cursor: pointer;
  box-shadow: ${boxShadow.base};
`;

const StyledFilledSearchBar = styled(StyledSearchBar)`
  max-width: 32.2rem;
  box-shadow: ${boxShadow["base-md"]};
`;
const RoundedButton = styled(IconButton)`
  width: ${spacing.xl};
  height: ${spacing.xl};
  background-color: ${colors.primary};
  border-radius: ${radii.full};
  &:hover {
    filter: brightness(0.9);
  }
`;

const Line = styled.div`
  width: 1px;
  border: 1px solid ${colors["gray-200"]};
  height: 100%;
`;

/**
 * SearchEmpty
 * Displays a minimal search bar with a prompt and search icon.
 *
 * @returns {JSX.Element}
 */

export const SearchEmpty = () => {
  return (
    <StyledSearchBar>
      <TextSm $weight="medium">Start your search</TextSm>
      <RoundedButton>
        <SearchIconSm />
      </RoundedButton>
    </StyledSearchBar>
  );
};

/**
 * SearchFilled
 * Displays a filled search bar with location, date range, and guest count.
 * Reads query params from the URL.
 *
 * @returns {JSX.Element}
 */
export const SearchFilled = () => {
  const params = new URLSearchParams(useLocation().search);
  const location = params.get("location");
  const maxGuests = params.get("maxGuests[gte]");

  return (
    <StyledFilledSearchBar>
      <TextSm $weight="medium">{location || "All Locations"}</TextSm>
      <Line />
      <TextSm $weight="medium">Feb 19-26</TextSm>
      <Line />
      <TextSm $weight="medium">{maxGuests} guests</TextSm>

      <RoundedButton>
        <SearchIconSm />
      </RoundedButton>
    </StyledFilledSearchBar>
  );
};
