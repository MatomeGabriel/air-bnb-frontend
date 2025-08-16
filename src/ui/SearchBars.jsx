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
export const SearchEmpty = () => {
  return (
    <StyledSearchBar onClick={() => console.log("CLicked")}>
      <TextSm $weight="medium">Start your search</TextSm>
      <RoundedButton>
        <SearchIconSm />
      </RoundedButton>
    </StyledSearchBar>
  );
};

export const SearchFilled = () => {
  return (
    <StyledFilledSearchBar>
      <TextSm $weight="medium">Bordeaux</TextSm>
      <Line />
      <TextSm $weight="medium">Feb 19-26</TextSm>
      <Line />
      <TextSm $weight="medium">2 guests</TextSm>

      <RoundedButton>
        <SearchIconSm />
      </RoundedButton>
    </StyledFilledSearchBar>
  );
};
