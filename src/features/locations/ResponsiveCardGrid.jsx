import styled from "styled-components";

import { breakpoints, spacing } from "../../design-system";
import useMedia from "../../hooks/useMedia";
import { BorderSm } from "../../ui/Borders";
import { FlexColumn } from "../../ui/Flex";
import { TextBase } from "../../ui/Paragraphs";
import { MobileGrid } from "./MobileCard";
import React from "react";

// Here is where we will render the cards based on the mobile or desktop
const LocationsHeader = styled.header`
  padding-bottom: ${spacing.lg};
`;
const ResponsiveCardGrid = ({
  items = [],
  headerText,
  renderCard,
  keyExtractor = (item) => item._id,
}) => {
  // Is screen width mobile or desktop
  const isMobile = useMedia(`(max-width: ${breakpoints.md})`);

  if (!items.length) return <p>No items found</p>;

  return (
    <>
      {headerText && (
        <LocationsHeader>
          <TextBase $color="gray-500">{headerText}</TextBase>
        </LocationsHeader>
      )}
      {isMobile ? (
        <>
          <BorderSm />
          <MobileGrid>
            {items?.map((item) => (
              <React.Fragment key={keyExtractor(item)}>
                {renderCard(item, "mobile")}
              </React.Fragment>
            ))}
          </MobileGrid>
        </>
      ) : (
        <FlexColumn $gap="lg">
          {items?.map((item) => (
            <React.Fragment key={keyExtractor(item)}>
              <BorderSm />
              {renderCard(item, "desktop")}
            </React.Fragment>
          ))}
        </FlexColumn>
      )}
    </>
  );
};

export default ResponsiveCardGrid;
