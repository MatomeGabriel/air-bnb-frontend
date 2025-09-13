import styled from "styled-components";
import { applyBackgroundColor, column, spacing } from "../design-system";
import { H2 } from "./Heading";
import { TextLg } from "./Paragraphs";
import { radii } from "../design-system/index";
import { generateResponsiveStyles } from "../design-system/mixins/responsive";
import ImageLoader from "./ImageLoader";

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

const CityContent = styled.div`
  ${column}
  gap: ${spacing.sm};
  padding: 3.2rem 1.6rem;
  height: auto;
  ${applyBackgroundColor}
  ${generateResponsiveStyles("height", { md: "20rem", lg: "21rem" })}
`;

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
