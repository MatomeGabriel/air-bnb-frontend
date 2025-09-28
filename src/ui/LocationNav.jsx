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

const NavContainer = styled.div`
  ${flexRowBetween};
  max-width: 112rem;
  margin: 0 auto;
  padding: 1.2rem 2.4rem;
`;

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

const ReserveBox = styled(FlexRow)`
  justify-content: space-between;
  width: 100%;
  ${generateResponsiveStyles("justify-content", { md: "center" })}
  ${generateResponsiveStyles("width", { md: "auto" })}
`;

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
