import styled from "styled-components";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { boxShadow, colors, radii, typography } from "../design-system";
import { Controller, useForm } from "react-hook-form";
import { format, addDays } from "date-fns";
import { useState } from "react";

const StyledSearchBar = styled.form`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  /* overflow: hidden; */
  width: 848px;
  height: 64px;
  background-color: white;
  /* padding: 0.8rem 0.8rem 0.8rem 3.2rem; */
  border-radius: ${radii.pill};
`;

const SearchGroup = styled.div`
  color: ${colors.secondary};
  &:focus-within {
    background-color: #ddd;
  }
  padding: 0.8rem 0.8rem 0.8rem 3.2rem;
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
    color: ${colors["gray-700"]};

    &:focus {
      outline: none;
      box-shadow: var(--shadow-sm);
    }
  }
`;
const StyledPanel = styled.div`
  position: absolute;
  top: 100%;
  z-index: 7;
  box-shadow: ${boxShadow.md};
`;
const Relative = styled.div`
  position: relative;
`;
const SearchBar = () => {
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      searchTerm: "",
      dateRange: {
        startDate: new Date(),
        endDate: addDays(new Date(), 3),
        key: "selection",
      },
    },
  });

  const onSubmitForm = (data) => {
    console.log(data);
    console.log("Submitted");
  };
  const [showCalendar, setShowCalendar] = useState(false);

  const onSubmit = (data) => {
    console.log("Search Term:", data.searchTerm);
    console.log("Date Range:", data.dateRange);
    // Trigger your search logic here
  };

  return (
    <StyledSearchBar onSubmit={handleSubmit(onSubmit)}>
      <SearchGroup>
        <label htmlFor="hotels">Hotels</label>
        <select
          id="hotels"
          {...register("hotels", { required: "Hotels are required" })}
        >
          <option value="" disabled selected>
            Select a Hotel...
          </option>
          <option value="All Locations">All Locations</option>
          {/* This options will come from the server */}
          <option value="Cape Town">Cape Town</option>
        </select>
      </SearchGroup>
      <SearchGroup>
        <label htmlFor="checkIn">Check in</label>
        <Controller
          name="dateRange"
          control={control}
          render={({ field }) => (
            <Relative>
              <button
                type="button"
                onClick={() => setShowCalendar(!showCalendar)}
              >
                {format(field.value.startDate, "MMM dd")} -{" "}
                {format(field.value.endDate, "MMM dd")}
              </button>

              {showCalendar && (
                <StyledPanel>
                  <DateRange
                    ranges={[field.value]}
                    onChange={(ranges) => field.onChange(ranges.selection)}
                    moveRangeOnFirstSelection={false}
                    editableDateInputs
                    minDate={new Date()}
                  />
                </StyledPanel>
              )}
            </Relative>
          )}
        />
      </SearchGroup>
    </StyledSearchBar>
  );
};

export default SearchBar;
