import styled from "styled-components";
import qs from "qs";
import {
  colors,
  generateResponsiveStyles,
  radii,
  typography,
} from "../design-system";
import { useForm } from "react-hook-form";
import { addDays } from "date-fns";
import { IconButton } from "./Buttons";
import { SearchIconSm } from "./Icons";
import useRedirect from "../hooks/useRedirect";
import { ROUTES } from "../utils/routes";

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

const SearchBar = () => {
  const navigate = useRedirect();

  const { control, handleSubmit, register } = useForm({
    // defaultValues: {
    //   dateRange: {
    //     startDate: new Date(),
    //     endDate: addDays(new Date(), 3),
    //     key: "selection",
    //   },
    // },
  });

  const onSubmit = (data) => {
    console.log(data);
    const queryObject = {
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
          <option value="All">All Locations</option>
          {/* This options will come from the server */}
          <option value="Cape Town">Cape Town</option>
        </select>
      </SearchGroup>
      <SearchGroup>
        <label htmlFor="checkIn">Check in</label>
        <input type="date" name="" id="" />
      </SearchGroup>
      <SearchGroup>
        <label htmlFor="checkIn">Check Out</label>
        <input type="date" name="" id="" />
      </SearchGroup>

      <SearchGroup>
        <label htmlFor="maxGuests">Hotels</label>
        <select
          id="maxGuests"
          {...register("maxGuests", {
            required: "Number of guests are required",
          })}
        >
          <option value="" disabled selected>
            Add guests
          </option>
          {Array.from({ length: 6 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </SearchGroup>
      <SearchButton $bgColor="primary">
        <SearchIconSm $width="4rem" />
      </SearchButton>
    </StyledSearchBar>
  );
};

export default SearchBar;
