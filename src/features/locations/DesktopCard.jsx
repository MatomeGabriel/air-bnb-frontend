import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, column, radii, Row, spacing } from "../../design-system";
import { TextLg, TextSm } from "../../ui/Paragraphs";
import { H3 } from "../../ui/Heading";
import Middot from "../../ui/Middot";
import { StarIcon } from "../../ui/Icons";
import { applyFlexProps } from "../../design-system";

import ButtonActions from "./ButtonActions";

const FlexRow = styled.div`
  ${Row}
  ${applyFlexProps}
`;

const DesktopContent = styled.div`
  ${column}
  gap: ${spacing.base};
  width: 100%;
`;

const DesktopCardBorder = styled.div`
  width: 4rem;
  border: 1px solid ${colors["gray-200"]};
`;
const DesktopImg = styled.img`
  width: 30rem;
  height: 20rem;
  border-radius: ${radii.md};
`;
const CardDesktop = styled.article`
  ${column};
  width: 100%;
  gap: 2.4rem;
  & a {
    ${Row};
    gap: ${spacing.lg};
    text-decoration: none;
  }
`;

/**
 * DesktopCard
 *
 * Renders a detailed desktop-friendly card for a property listing.
 * Displays image, title, location, features, amenities, rating, price, and action buttons.
 * Navigates to the listing detail page on click.
 *
 * @param {Object} props
 * @param {Object} props.place - Listing data object
 * @param {string} props.place._id - Unique listing ID
 * @param {string} props.place.title - Listing title
 * @param {string} props.place.type - Property type (e.g. "Room", "Villa")
 * @param {string} props.place.location - Listing location
 * @param {number} props.place.maxGuests - Max number of guests
 * @param {number} props.place.bedrooms - Number of bedrooms
 * @param {number} props.place.bathrooms - Number of bathrooms
 * @param {number} props.place.price - Price per night
 * @param {number} props.place.rating - Average rating
 * @param {number} props.place.reviews - Total number of reviews
 * @param {Array} props.place.amenities - Array of amenity keys
 * @param {Array} props.place.images - Array of image objects with `url` property
 *
 * @returns {JSX.Element} A styled card component with listing details
 *
 * @example
 * <DesktopCard place={listingData} />
 */
const DesktopCard = ({ place }) => {
  const {
    title,
    rating,
    reviews,
    price,
    type,
    amenities,
    location,
    bedrooms,
    bathrooms,
    _id,
    maxGuests,
  } = place;

  const features = [
    `1-${maxGuests} Guests`,
    `${type}`,
    `${bedrooms} beds`,
    `${bathrooms} baths`,
  ];

  const contentUrl = `/locations/${_id}`;

  return (
    <CardDesktop>
      <Link to={contentUrl}>
        <DesktopImg src={place.images[0].url} />
        <DesktopContent>
          <div>
            <TextSm $color="gray-500" as="span">
              {type} in {location}
            </TextSm>
            <H3>{title}</H3>
          </div>
          <DesktopCardBorder />
          <div>
            <FlexRow $gap="xs">
              {features.map((feature, i) => (
                <>
                  <TextSm key={i} $color="gray-500" as="span">
                    {feature}
                  </TextSm>
                  {features.length - 1 > i && <Middot $color="darkBorder" />}
                </>
              ))}
            </FlexRow>
            <FlexRow $gap="xs">
              {amenities.slice(0, 5).map((amenity, i) => (
                <>
                  <TextSm
                    $textTransform="capitalize"
                    key={i}
                    $color="gray-500"
                    as="span"
                  >
                    {amenity.replace(/_/g, " ")}
                  </TextSm>
                  {/* print when  */}
                  {amenity.slice(0, 5).length - 1 > i && (
                    <Middot $color="darkBorder" />
                  )}
                </>
              ))}
            </FlexRow>
          </div>
          <DesktopCardBorder />
          <FlexRow $justify="space-between" $align="end">
            <FlexRow $align="center" $gap="sm">
              <TextSm $color="gray-700" $weight="medium">
                {rating}
              </TextSm>
              <StarIcon $fill="yellow" $width="base" />
              <TextSm $color="gray-700">({reviews} reviews)</TextSm>
            </FlexRow>
            <FlexRow $gap="sm" $align="center">
              <TextLg $color="gray-700">${price}</TextLg>
              <TextSm $color="gray-700">/ night</TextSm>
            </FlexRow>
          </FlexRow>
        </DesktopContent>
      </Link>
      <ButtonActions _id={_id} />
    </CardDesktop>
  );
};

export default DesktopCard;
