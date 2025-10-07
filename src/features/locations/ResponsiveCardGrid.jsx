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

/**
 * ResponsiveCardGrid
 *
 * Renders a responsive grid or column layout for a list of items, switching between mobile and desktop views.
 * Accepts a custom card renderer and optional header text.
 *
 * Features:
 * - Uses `useMedia` to detect screen size and switch layout
 * - Displays items in a grid (`MobileGrid`) on mobile
 * - Displays items in a vertical column with dividers on desktop
 * - Supports optional header text and custom key extraction
 *
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array of items to render
 * @param {string} [props.headerText] - Optional header text to display above the grid
 * @param {Function} props.renderCard - Function to render each item, receives `(item, mode)` where mode is `"mobile"` or `"desktop"`
 * @param {Function} [props.keyExtractor] - Function to extract a unique key from each item (default: `item._id`)
 *
 * @returns {JSX.Element} Responsive card layout
 *
 * @example
 * <ResponsiveCardGrid
 *   items={listings}
 *   headerText="12 stays in Cape Town"
 *   renderCard={(item, mode) => (
 *     mode === "mobile" ? <MobileCard place={item} /> : <DesktopCard place={item} />
 *   )}
 * />
 */

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
