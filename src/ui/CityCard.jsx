import styled from "styled-components";
import {
  applyBackgroundColor,
  colors,
  column,
  spacing,
} from "../design-system";
import { H2 } from "./Heading";
import { TextLg } from "./Paragraphs";
import { radii } from "../design-system/index";
import { generateResponsiveStyles } from "../design-system/mixins/responsive";
import { applyCSSProperty } from "../design-system/mixins/mixins";

const StyledCityCard = styled.div`
  ${column}
  width: 100%;
  border-radius: ${radii.sm};
  overflow: hidden;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 16rem;
  ${generateResponsiveStyles("height", { md: "18rem", lg: "20rem" })}
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
  console.log("Background color", $bgColor);

  return (
    <StyledCityCard $bgColor={$bgColor}>
      <Img src={image} alt="card" />
      <CityContent $bgColor={$bgColor}>
        <H2 $color="white">{name}</H2>
        <TextLg $color="white">{distance}</TextLg>
      </CityContent>
    </StyledCityCard>
  );
};

export default CityCard;
