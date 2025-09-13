import styled from "styled-components";
import { FlexRow } from "./Flex";
import { ButtonOutline, ButtonOutlineDarkSm } from "./Buttons";
import useRedirect from "../hooks/useRedirect";

const StyledFilters = styled(FlexRow)`
  gap: 1rem;
  flex-wrap: wrap;
`;

const Filters = ({ filterArr = [] }) => {
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

export default Filters;
