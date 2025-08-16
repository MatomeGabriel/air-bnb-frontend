import styled, { css } from "styled-components";
import {
  flexColumnCenter,
  radii,
  spacing,
  generateResponsiveStyles,
} from "../design-system";

import { H2 } from "./Heading";
import { ButtonSolidLightLg } from "./Buttons";

import Img1 from "../assets/experiences1.jpg";
import Img2 from "../assets/experiences2.jpg";

const StyledInspirationBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.2rem;
  ${generateResponsiveStyles("grid-template-columns", {
    sm: "1fr 1fr",
  })}
`;

const StyledInspiration = styled.div`
  ${flexColumnCenter}
  gap: ${spacing.md};

  ${({ $bgImg }) =>
    $bgImg &&
    css`
      background-image: radial-gradient(
          circle at center,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0)
        ),
        url(${$bgImg});
    `}

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 36rem;
  padding: ${spacing.lg};
  border-radius: ${radii.sm};

  ${generateResponsiveStyles("padding", { md: spacing["2xl"], lg: "8rem" })}
  ${generateResponsiveStyles("justify-content", { lg: "start" })}
  ${generateResponsiveStyles("align-items", { lg: "start" })}
  ${generateResponsiveStyles("height", { md: "48rem", lg: "62rem" })}
  ${generateResponsiveStyles("gap", { md: spacing.lg })}

  ${({ $bgImg }) =>
    $bgImg &&
    generateResponsiveStyles("background-image", {
      lg: `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0,0,0,0)), url(${$bgImg})`,
    })}


  & h2 {
    text-align: center;
    ${generateResponsiveStyles("text-align", { lg: "start" })}
  }
`;

const Inspiration = () => {
  return (
    <StyledInspirationBox>
      <StyledInspiration $bgImg={Img1}>
        <H2 $size="5xl" $color="white" $textShadow="smLight">
          Things to do on your trip
        </H2>
        <ButtonSolidLightLg $radius="sm">Experiences</ButtonSolidLightLg>
      </StyledInspiration>

      <StyledInspiration $bgImg={Img2}>
        <H2 $size="5xl" $color="white" $textShadow="smLight">
          Things to do from home
        </H2>
        <ButtonSolidLightLg $radius="sm">Online Experiences</ButtonSolidLightLg>
      </StyledInspiration>
    </StyledInspirationBox>
  );
};

export default Inspiration;
