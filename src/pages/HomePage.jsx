import styled from "styled-components";
import {
  flexColumnCenter,
  spacing,
  generateResponsiveStyles,
} from "../design-system";

import Hero from "../ui/Hero";
import { H2 } from "../ui/Heading";
import CityCard from "../ui/CityCard";
import Inspiration from "../ui/Inspiration";

import cityImg1 from "../assets/sandton.jpg";
import cityImg2 from "../assets/Joburg.jpg";
import cityImg3 from "../assets/Woodmead.jpg";
import cityImg4 from "../assets/Hyde.jpg";
import GiftCardSection from "../ui/GiftCardSection";
import { MainContainer } from "../ui/MainContainer";
import Footer from "../ui/Footer";

/**
 * Container
 * Main vertical layout container for the homepage.
 * Adds large spacing between sections.
 */
const Container = styled(MainContainer)`
  ${flexColumnCenter}
  gap: ${spacing["4xl"]};
`;

/**
 * StyledGrid
 * Responsive grid layout for displaying city cards.
 * Adjusts column count based on screen size.
 */
const StyledGrid = styled.div`
  display: grid;
  gap: 2.4rem;
  width: 100%;
  justify-content: center;
  grid-template-columns: 1fr;
  ${generateResponsiveStyles("grid-template-columns", {
    sm: "repeat(auto-fit, minmax(0, 260px))",
    lg: "repeat(auto-fit, minmax(0, 300px))",
  })}
  ${generateResponsiveStyles("justify-content", { lg: "start" })}
`;

/**
 * Section
 * Reusable section wrapper with vertical alignment and responsive styling.
 */
const Section = styled.section`
  ${flexColumnCenter}
  width: 100%;
  gap: ${spacing.xl};
  ${generateResponsiveStyles("align-items", { lg: "start" })}
`;

/**
 * cities
 * Array of city data used to render CityCard components.
 * Each item includes name, image, distance, and background color.
 */
const cities = [
  {
    name: "Sandton CityHotel",
    image: cityImg1,
    distance: "53 km away",
    $bgColor: "card-1",
  },
  {
    name: "Joburg City Hotel",
    image: cityImg2,
    distance: "168 km away",
    $bgColor: "card-2",
  },
  {
    name: "Woodmead Hotel",
    image: cityImg3,
    distance: "30 miles away",
    $bgColor: "card-3",
  },
  {
    name: "Hyde Park Hotel",
    image: cityImg4,
    distance: "34 km away",
    $bgColor: "card-3",
  },
];

/**
 * HomePage
 * Renders the full homepage layout including hero, city inspiration,
 * Airbnb experiences, gift card section, and footer.
 *
 * @returns {JSX.Element}
 */
const HomePage = () => {
  return (
    <>
      <Hero />
      <Container>
        <Section>
          <H2 $size="4xl" $color="black">
            Inspiration for your next trip
          </H2>
          <StyledGrid>
            {cities.map((city, i) => (
              <CityCard city={city} key={i} />
            ))}
          </StyledGrid>
        </Section>
        <Section>
          <H2 $size="4xl" $color="black">
            Discover Airbnb Experiences
          </H2>
          <Inspiration />
        </Section>
        <GiftCardSection />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
