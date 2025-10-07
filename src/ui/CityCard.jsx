import styled from "styled-components";
import { applyBackgroundColor, column, spacing } from "../design-system";
import { H2 } from "./Heading";
import { TextLg } from "./Paragraphs";
import { radii } from "../design-system/index";
import { generateResponsiveStyles } from "../design-system/mixins/responsive";
import ImageLoader from "./ImageLoader";

/**
 * StyledCityCard
 * Container for the city card layout.
 * Applies column flex layout, rounded corners, and responsive image height.
 *
 * Props:
 * - $bgColor: Optional background color applied via design system mixin.
 */
const StyledCityCard = styled.div`
  ${column}
  width: 100%;
  border-radius: ${radii.sm};
  overflow: hidden;
  & img {
    object-fit: cover;
    width: 100%;
    height: 16rem;
    ${generateResponsiveStyles("height", { md: "18rem", lg: "20rem" })}
  }
`;

/**
 * CityContent
 * Inner content block for city name and distance.
 * Uses column layout, spacing, and responsive height.
 *
 * Props:
 * - $bgColor: Optional background color applied via design system mixin.
 */
const CityContent = styled.div`
  ${column}
  gap: ${spacing.sm};
  padding: 3.2rem 1.6rem;
  height: auto;
  ${applyBackgroundColor}
  ${generateResponsiveStyles("height", { md: "20rem", lg: "21rem" })}
`;

/**
 * CityCard
 * Displays a visual card for a city with image, name, and distance.
 *
 * @param {Object} props
 * @param {Object} props.city - City data object.
 * @param {string} props.city.name - Name of the city.
 * @param {string} props.city.distance - Distance or travel time to the city.
 * @param {string} props.city.image - Image URL representing the city.
 * @param {string} [props.city.$bgColor] - Optional background color for the card.
 *
 * @returns {JSX.Element} A styled city card component.
 */
const CityCard = ({ city }) => {
  const { name, distance, image, $bgColor } = city;

  return (
    <StyledCityCard $bgColor={$bgColor}>
      {/* <Img src={image} alt="card" /> */}
      <ImageLoader src={image} alt="card" />
      <CityContent $bgColor={$bgColor}>
        <H2 $color="white">{name}</H2>
        <TextLg $color="white">{distance}</TextLg>
      </CityContent>
    </StyledCityCard>
  );
};

export default CityCard;
