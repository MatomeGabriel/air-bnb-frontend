import styled from "styled-components";
import { FlexRow } from "./Flex";
import { ButtonOutline, ButtonOutlineDarkSm } from "./Buttons";
import useRedirect from "../hooks/useRedirect";
import UseUpdateQueryParams from "../hooks/useUpdateQueryParams";

const StyledFilters = styled(FlexRow)`
  gap: 1rem;
  flex-wrap: wrap;
`;

export const MenuFilters = ({ filterArr = [] }) => {
  const redirect = useRedirect();

  if (filterArr.length < 1) {
    return null;
  }

  return (
    <StyledFilters className="Filters">
      {filterArr?.map(({ title, url }, i) => (
        <ButtonOutline onClick={() => redirect(url)} key={i}>
          {title}
        </ButtonOutline>
      ))}
    </StyledFilters>
  );
};
const Select = styled(ButtonOutline)``;
export const SearchFilters = () => {
  const { updateParams, params } = UseUpdateQueryParams();

  const handleLocationChange = (e) => {
    if (e.target.value === "null") return null;
    updateParams({ location: e.target.value });
  };

  const handleTypeChange = (e) => {
    updateParams({ type: e.target.value });
  };
  const handleMaxGuestsChange = (e) => {
    updateParams({ "maxGuests[gte]": e.target.value });
  };

  return (
    <StyledFilters className="Filters">
      {/* <ButtonOutline onClick={handleClick}>What</ButtonOutline>
      <ButtonOutline>What</ButtonOutline> */}

      <Select
        as="select"
        onChange={handleLocationChange}
        defaultValue={params.get("location") || ""}
      >
        <option selected disabled value="">
          Select a location
        </option>
        <option value="">All locations</option>
        <option value="Cape Town">Cape Town</option>
        <option value="Durban">Durban</option>
        <option value="Johannesburg">Johannesburg</option>
      </Select>

      <Select
        as="select"
        onChange={handleTypeChange}
        defaultValue={params.get("type") || ""}
      >
        <option selected value="">
          Type of place
        </option>
        <option value="Whole Villa">Whole Villa</option>
        <option value="Room">Room</option>
        <option value="Entire Unit">Entire Unit</option>
      </Select>

      <Select
        as="select"
        onChange={handleMaxGuestsChange}
        defaultValue={params.get("maxGuests[gte]") || ""}
      >
        <option selected value="">
          Number of guests
        </option>
        {Array.from({ length: 6 }, (_, i) => (
          <option value={i + 1} key={i}>
            {i + 1}
          </option>
        ))}
      </Select>
    </StyledFilters>
  );
};
