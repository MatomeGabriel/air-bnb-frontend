import styled from "styled-components";
import {
  backgroundCover,
  breakpoints,
  flexColumnEndCenter,
  flexColumnStartCenter,
  spacing,
} from "../design-system";

import { H1 } from "../ui/Heading";
import heroImg from "../assets/hero.jpg";

import MainMenu from "./MainMenu";
import { ButtonSolidLg } from "./Buttons";
import { generateResponsiveStyles } from "../design-system/mixins/responsive";
import SearchBar from "./SearchBar";

/**
 * Header
 * Top-level container for the hero section.
 * Uses vertical layout, dark background, and responsive padding.
 */
const Header = styled.header`
  ${flexColumnStartCenter}
  gap: ${spacing.lg};
  padding: 3.2rem;
  background-color: #000;

  ${generateResponsiveStyles("padding", {
    md: "1.2rem 4.8rem 6.4rem 4.8rem",
    lg: "1.6rem 8rem 9.6rem 8rem",
  })}
`;

/**
 * SectionImg
 * Background image section with gradient overlay and centered content.
 * Adjusts height and padding on larger screens.
 */
const SectionImg = styled.div`
  ${flexColumnEndCenter}
  ${backgroundCover}
  padding: 3rem  2.4rem;
  border-radius: ${spacing.sm};
  max-width: 128rem;
  width: 100%;
  position: relative;

  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5)
    ),
    url(${heroImg});

  height: 48rem;
  gap: ${spacing.md};
  & h1 {
    text-align: center;
  }

  @media (min-width: ${breakpoints.md}) {
    height: 64rem;
    padding: 7.5rem;
    gap: ${spacing.lg};
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.3)
      ),
      url(${heroImg});
  }
`;

/**
 * Hero
 * Renders the homepage hero section with navigation, search bar, heading, and CTA button.
 *
 * @returns {JSX.Element}
 */
const Hero = () => {
  return (
    <Header>
      <MainMenu />
      <SearchBar />
      <SectionImg>
        <H1 $size="5xl" $color="white" $textShadow="smLight">
          Not sure where to go? Perfect.
        </H1>
        <ButtonSolidLg>I’m flexible</ButtonSolidLg>
      </SectionImg>
    </Header>
  );
};

export default Hero;
