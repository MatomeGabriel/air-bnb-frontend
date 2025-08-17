import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { colors, column, radii, Row, spacing } from "../../design-system";
import { TextLg, TextSm } from "../../ui/Paragraphs";
import { H3 } from "../../ui/Heading";
import Middot from "../../ui/Middot";
import { StarIcon } from "../../ui/Icons";
import { applyFlexProps } from "../../design-system";

import { ButtonPrimaryMdFull } from "../../ui/Buttons";
import { useListings } from "../../context/ListingsContext";

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
const DesktopButtonBox = styled.div`
  ${column}
  width: 30rem;
  gap: 1.6rem;
`;

const DesktopCard = ({ place }) => {
  const { deleteHostListing, isDeletingHostListing } = useListings();
  const {
    title,
    description,
    rating,
    reviews,
    price,
    type,
    amenities,
    location,
    images,
    bedrooms,
    _id,
    maxGuests,
  } = place;

  const isListings = useLocation().pathname === "/listings";

  const features = [
    `1-${maxGuests} guests`,
    `${type}`,
    `${bedrooms} beds`,
    "3 bath",
  ];
  const imgUrl = `http://localhost:3000/${images[0]}`;
  const contentUrl = `/locations/${_id}`;

  const onDeleteHosting = () => {
    console.log(_id);
    deleteHostListing(_id, {
      onError: (err) => {
        console.log(err);
      },
    });
  };

  return (
    <CardDesktop>
      <Link to={contentUrl}>
        <DesktopImg src={imgUrl} />
        <DesktopContent>
          <div>
            <TextSm $color="gray-500" as="span">
              {type} in {location}
            </TextSm>
            <H3>{title}</H3>
          </div>
          <DesktopCardBorder />
          <div>
            <FlexRow>
              {features.map((feature, i) => (
                <>
                  <TextSm key={i} $color="gray-500" as="span">
                    {feature}
                  </TextSm>
                  {feature.length - 1 > i && <Middot />}
                </>
              ))}
            </FlexRow>
            <FlexRow>
              {amenities.map((amenity, i) => (
                <>
                  <TextSm key={i} $color="gray-500" as="span">
                    {amenity}
                  </TextSm>
                  {amenity.length - 1 > i && <Middot />}
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
      {isListings && (
        <DesktopButtonBox>
          <ButtonPrimaryMdFull>Update</ButtonPrimaryMdFull>
          <ButtonPrimaryMdFull
            disabled={isDeletingHostListing}
            onClick={onDeleteHosting}
          >
            Delete
          </ButtonPrimaryMdFull>
        </DesktopButtonBox>
      )}
    </CardDesktop>
  );
};

export default DesktopCard;
