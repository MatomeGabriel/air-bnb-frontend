import styled from "styled-components";

import { breakpoints, spacing } from "../../design-system";
import useMedia from "../../hooks/useMedia";
import { BorderSm } from "../../ui/Borders";
import { FlexColumn } from "../../ui/Flex";
import { TextBase } from "../../ui/Paragraphs";
import DesktopCard from "./DesktopCard";
import MobileCard, { MobileGrid } from "./MobileCard";
import { useLocationsDataContext } from "../../context/LocationsDataContext";
import LoadingHandler from "../../ui/LoadingHandler";
import UseUpdateQueryParams from "../../hooks/useUpdateQueryParams";

// Here is where we will render the cards based on the mobile or desktop
const LocationsHeader = styled.header`
  padding-bottom: ${spacing.lg};
`;
const LocationCards = () => {
  // Is screen width mobile or desktop
  // const location = useLocation();
  const { isLoading, locations, error } = useLocationsDataContext();
  const { params } = UseUpdateQueryParams();

  const isMobile = useMedia(`(max-width: ${breakpoints.md})`);

  return (
    <LoadingHandler
      isLoading={isLoading}
      error={error}
      fallback={<p>Could not fetch content</p>}
      data={locations}
    >
      {(data) => (
        <>
          <LocationsHeader>
            <TextBase $color="gray-500">
              {locations.length} stays{" "}
              {params.get("location")
                ? `in ${params.get("location")}`
                : "in all locations"}
            </TextBase>
          </LocationsHeader>
          {isMobile ? (
            <>
              <BorderSm />
              <MobileGrid>
                {data?.map((place) => (
                  <MobileCard key={place._id} place={place} />
                ))}
              </MobileGrid>
            </>
          ) : (
            <FlexColumn $gap="lg">
              {data?.map((place) => (
                <>
                  <BorderSm />
                  <DesktopCard key={place._id} place={place} />
                </>
              ))}
            </FlexColumn>
          )}
        </>
      )}
    </LoadingHandler>
  );
};

export default LocationCards;
