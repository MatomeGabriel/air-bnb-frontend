import styled from "styled-components";
import {
  colors,
  flexRowBetween,
  flexRowCenter,
  generateResponsiveStyles,
  spacing,
} from "../design-system";
import { Link } from "react-router-dom";
import { FlexColumn, FlexRow } from "./Flex";
import { ButtonPrimaryMd } from "./Buttons";
import { TextBase, TextXs } from "./Paragraphs";
import { usePopup } from "../context/PopupContext";
import Reservation from "../features/locations/Reservation";

/**
 * StyledLocationNav
 * Responsive navigation bar fixed at the bottom on mobile and sticky at the top on desktop.
 * Includes border and background styling.
 */
const StyledLocationNav = styled.nav`
  /* position: sticky;
  top: 0; */
  position: fixed;
  bottom: 0;
  ${generateResponsiveStyles("position", { md: "sticky" })};
  ${generateResponsiveStyles("top", { md: "0" })};
  z-index: 10;
  background-color: ${colors.white};
  width: 100%;
  border-bottom: 1px solid ${colors["gray-200"]};
`;
/**
 * NavContainer
 * Horizontal layout container for navigation links and reservation box.
 */
const NavContainer = styled.div`
  ${flexRowBetween};
  max-width: 112rem;
  margin: 0 auto;
  padding: 1.2rem 2.4rem;
`;
/**
 * LocationNavItems
 * Navigation links for scrolling to different sections of the location page.
 * Hidden on mobile, visible on medium screens and up.
 */
const LocationNavItems = styled.ul`
  height: 6.4rem;
  display: flex;
  align-items: center;
  gap: ${spacing.lg};
  display: none;
  ${generateResponsiveStyles("display", { md: "flex" })}
  & li {
    ${flexRowCenter};
    height: 100%;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${colors.secondary};
    }
  }
  & a {
    color: ${colors.secondary};
    text-decoration: none;
  }
`;
/**
 * ReserveBox
 * Displays pricing summary and a reserve button.
 * Visible on mobile or when sticky mode is active.
 */
const ReserveBox = styled(FlexRow)`
  justify-content: space-between;
  width: 100%;
  ${generateResponsiveStyles("justify-content", { md: "center" })}
  ${generateResponsiveStyles("width", { md: "auto" })}
`;

/**
 * LocationNav
 * Renders a responsive navigation bar for location pages.
 * Includes scroll-to-section links and a reserve button with modal support.
 *
 * @param {Object} props
 * @param {Object} props.locNavData - Refs and scroll handlers for each section.
 * @param {boolean} props.isMobile - Whether the view is mobile.
 * @param {Object} props.location - Location data passed to the reservation modal.
 * @param {Object} props.summary - Pricing summary with total and number of nights.
 * @param {Function} props.onUpdate - Callback for updating reservation state.
 * @param {boolean} props.isSticky - Whether the nav should behave as sticky.
 * @returns {JSX.Element}
 */
const LocationNav = ({
  locNavData,
  isMobile,
  location,
  summary,
  onUpdate,
  isSticky,
}) => {
  const { openPopup, closePopup } = usePopup();

  const openReservationModal = () => {
    openPopup(() => Reservation({ location, onUpdate }));
  };

  const {
    photoRef,
    scrollToPhoto,
    amenitiesRef,
    scrollToAmenities,
    revsRef,
    scrollToReviews,
    locRef,
    scrollToLocation,
    reservationRef,
    scrollToReservation,
  } = locNavData;
  return (
    <StyledLocationNav>
      <NavContainer>
        <LocationNavItems>
          <li>
            <Link onClick={() => scrollToPhoto(photoRef)}>Photos</Link>
          </li>
          <li>
            <Link onClick={() => scrollToAmenities(amenitiesRef)}>
              Amenities
            </Link>
          </li>
          <li>
            <Link onClick={() => scrollToReviews(revsRef)}>Reviews</Link>
          </li>
          <li>
            <Link onClick={() => scrollToLocation(locRef)}>Location</Link>
          </li>
        </LocationNavItems>
        {(isMobile || isSticky) && (
          <>
            <ReserveBox $gap="md">
              <FlexColumn>
                <TextBase $decoration="underline" $weight="bold">
                  ${summary.total}
                </TextBase>
                <TextXs>for {summary.numDays} nights</TextXs>
              </FlexColumn>

              <ButtonPrimaryMd
                $radius="pill"
                $width="15rem"
                onClick={
                  isMobile
                    ? openReservationModal
                    : () => scrollToReservation(reservationRef)
                }
              >
                Reserve
              </ButtonPrimaryMd>
            </ReserveBox>
          </>
        )}
      </NavContainer>
    </StyledLocationNav>
  );
};

export default LocationNav;
