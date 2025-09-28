import styled from "styled-components";
import qs from "qs";
import {
  colors,
  generateResponsiveStyles,
  radii,
  typography,
} from "../design-system";
import { useForm } from "react-hook-form";
import { IconButton } from "./Buttons";
import { SearchIconSm } from "./Icons";
import useRedirect from "../hooks/useRedirect";
import { ROUTES } from "../utils/routes";
import { addDate, convertToDateString } from "../utils/reservationUtils";
import {
  LocationsListOptions,
  LocationsGuestOptions,
} from "./SearchBarOptions";

const StyledSearchBar = styled.form`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 848px;
  border-radius: ${radii.md};
  ${generateResponsiveStyles("grid-template-columns", {
    md: "2fr 1.5fr 1.5fr 1.5fr 1fr",
  })}
  ${generateResponsiveStyles("border-radius", {
    md: radii.pill,
  })}
  background-color: white;
  overflow: hidden;
`;

const SearchButton = styled(IconButton)`
  padding: 1.6rem;
`;

const SearchGroup = styled.div`
  color: ${colors.secondary};
  &:focus-within {
    background-color: #ddd;
  }
  &:not(:last-child) {
    border-right: 1px solid ${colors["gray-200"]};
  }

  padding: 1.6rem;
  ${generateResponsiveStyles("padding", {
    md: "0.8rem 0.8rem 0.8rem 3.2rem",
  })}

  & label {
    font-size: ${typography.sizes.xs};
    line-height: ${typography.lineHeights.relaxed};
    font-weight: ${typography.weights.bold};
  }

  & select {
    width: 100%;
    background: none;
    font-size: 1.4rem;
    line-height: 1.2;
    border: none;
    padding: 0;
    transition: all 0.2s ease;
    color: ${colors["gray-500"]};
    padding: 0 0.8rem;
    border: 1px solid ${colors["gray-300"]};
    ${generateResponsiveStyles("border", {
      md: "none",
    })}src

    &:focus {
      /* outline: none; */
    }
  }

  & input[type="date"] {
    color: ${colors["gray-500"]};
  }
`;

/**
 * SearchBar
 *
 * Renders a responsive search bar for filtering hotel listings by location, dates, and guest count.
 * Handles form state, validation, and navigation to filtered results.
 *
 * Usage:
 *   <SearchBar />
 *
 * Features:
 *   - Location, check-in, check-out, and max guests fields
 *   - Responsive design and custom styling
 *   - Navigates to filtered results on submit
 *
 * No props required.
 *
 * @returns {JSX.Element} The search bar UI
 */
const SearchBar = () => {
  const navigate = useRedirect();

  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      checkIn: convertToDateString(),
      checkOut: convertToDateString(addDate(new Date(), 3)),
      location: "All",
      maxGuests: "2",
    },
  });

  const checkIn = watch("checkIn");

  const onSubmit = (data) => {
    const queryObject = {
      // MOD___
      maxGuests: { gte: data.maxGuests },
    };

    if (data.location !== "All") {
      queryObject.location = data.location;
    }
    const queryString = `?${qs.stringify(queryObject, { encode: true })}`;
    navigate(ROUTES.viewLocations + queryString);
  };

  return (
    <StyledSearchBar onSubmit={handleSubmit(onSubmit)}>
      <SearchGroup>
        <label htmlFor="location">Hotels</label>
        <select
          id="location"
          {...register("location", { required: "Hotels are required" })}
        >
          <option value="" disabled selected>
            Select a Hotel...
          </option>
          <option selected value="All">
            All Locations
          </option>
          <LocationsListOptions showAllLoc={false} />
        </select>
      </SearchGroup>
      <SearchGroup>
        <label htmlFor="checkIn">Check in</label>
        <input
          type="date"
          name=""
          id="checkIn"
          min={convertToDateString()}
          {...register("checkIn")}
        />
      </SearchGroup>
      <SearchGroup>
        <label htmlFor="checkIn">Check Out</label>
        <input
          min={convertToDateString(
            new Date(checkIn).setDate(new Date(checkIn).getDate() + 1)
          )}
          type="date"
          name=""
          id="checkOut"
          {...register("checkOut")}
        />
      </SearchGroup>

      <SearchGroup>
        <label htmlFor="maxGuests">Max Guests</label>
        <select
          id="maxGuests"
          {...register("maxGuests", {
            required: "Number of guests are required",
          })}
        >
          <option value="" disabled selected>
            Add guests
          </option>
          <LocationsGuestOptions />
        </select>
      </SearchGroup>
      <SearchButton $bgColor="primary">
        <SearchIconSm $width="4rem" />
      </SearchButton>
    </StyledSearchBar>
  );
};

export default SearchBar;
