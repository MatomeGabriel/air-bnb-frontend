/**
 * Location Page Component
 *
 * Renders detailed accommodation info for dynamic route `/locations/:id`.
 * Includes images, amenities, host details, ratings, and reservation logic.
 *
 * Features:
 * - Sticky section navigation
 * - Responsive layout with conditional mobile behavior
 * - Reservation panel (desktop only)
 * - Scroll-to-section hooks with offset
 * - Context-driven data fetching (location + host)
 *
 * Returns:
 * - Full JSX layout for property detail view
 */

import styled from "styled-components";
import {
  breakpoints,
  colors,
  column,
  flexColumnCenterStart,
  flexColumnStart,
  flexRowBetween,
  generateResponsiveStyles,
  radii,
  spacing,
} from "../design-system";
import { Header } from "../ui/Header";
import MainMenu from "../ui/MainMenu";
import LocationHeader from "../features/locations/LocationHeader";
import { useSelectedLocationContext } from "../context/SelectedLocationContext";
import { FlexColumn, FlexRow } from "../ui/Flex";
import Middot from "../ui/Middot";
import { H3 } from "../ui/Heading";
import { TextBase, TextSm, TextXs } from "../ui/Paragraphs";
import {
  CalenderIcon,
  CheckInIcon,
  HomeIcon,
  SparklesIcon,
  StarOutlineIcon,
} from "../ui/Icons";
import DataDetail from "../features/locations/DataDetail";
import Description from "../features/locations/Description";
import BedroomImg from "../assets/bedroom.png";
import Amenities from "../features/locations/Amenities";
import Ratings from "../features/locations/Ratings";
import Avatar from "../features/locations/Avatar";
import HostInfo from "../features/locations/HostInfo";

import Footer from "../ui/Footer";
import Reservation from "../features/locations/Reservation";
import { useHostContext } from "../context/HostContext";
import { Spinner } from "../ui/Spinners";
import ImageLoader from "../ui/ImageLoader";
import LocationImages from "../features/locations/LocationImages";
import LocationNav from "../ui/LocationNav";
import useScrollTo from "../hooks/useScrollTo";
import useMedia from "../hooks/useMedia";
import { useEffect, useState } from "react";
import useStickyToggle from "../hooks/useStickyToggle";
import { calculateTotals } from "../utils/reservationUtils";
import AirbnbComment from "../ui/AirbnbComment";
import HouseRules from "../features/locations/HouseRules";
const Container = styled.main`
  padding: 2.4rem;
  /* padding: 2.4rem 1.2rem 6.4rem 1.2rem; */
  max-width: 112rem;
  margin: 0 auto;
  gap: 4rem;
  ${column};
`;

const ContentBox = styled(FlexRow)`
  /* applies gap from medium screens */
  ${generateResponsiveStyles("gap", { md: "8rem" })}
`;
const ReservationBox = styled.div`
  /* applies width of 40% from medium screens */
  ${generateResponsiveStyles("width", { md: "40%" })}
`;
const ContentHeader = styled.header`
  ${flexRowBetween};
  padding-bottom: ${spacing.lg};
  border-bottom: 1px solid ${colors["gray-200"]};
  width: 100%;
`;
const Content = styled(FlexColumn)`
  width: 100%;
  ${generateResponsiveStyles("width", { md: "60%" })}
  gap: ${spacing.lg};

  /* applies width of 60% from medium screens */
  ${generateResponsiveStyles("gap", { md: spacing.xl })}
`;

const dataDetail = [
  {
    icon: <HomeIcon />,
    heading: "Entire home",
    subHeading: "You’ll have the apartment to yourself",
  },
  {
    icon: <SparklesIcon />,
    heading: "Enhanced Clean",
    subHeading:
      "This Host committed to Airbnb’s 5-step enhanced cleaning process.",
  },
  {
    icon: <CheckInIcon />,
    heading: "Self check-in",
    subHeading: "Check yourself in with the keypad.",
  },
  {
    icon: <CalenderIcon />,
    heading: "Free cancellation before Feb 14",
    $align: "center",
  },
];

// avatarUrl, title, subtitle, comment
const comments = [
  {
    avatarUrl: "/1.png",
    title: "Luke",
    subtitle: "December 2023",
    comment: "Host was very attentive.",
  },
  {
    avatarUrl: "/2.png",
    title: "Amina",
    subtitle: "July 2023",
    comment:
      "Wonderful neighborhood, easy access to restaurants and the subway, cozy studio apartment with a super comfortable bed. Great host, super helpful and responsive. Cool murphy bed...",
  },
  {
    avatarUrl: "/3.png",
    title: "Liam",
    subtitle: "March 2022",
    comment:
      "Well designed and fun space, neighborhood has lots of energy and amenities.",
  },
  {
    avatarUrl: "/4.png",
    title: "Priya",
    subtitle: "October 2024",
    comment: "Check-in was easy and the apartment was spacious.",
  },
  {
    avatarUrl: "/5.png",
    title: "Carlos",
    subtitle: "May 2025",
    comment: "Great value for money. Would book again!",
  },
  {
    avatarUrl: "/6.png",
    title: "Sophie",
    subtitle: "August 2023",
    comment: "Host provided excellent recommendations for local food.",
  },
];

const Section = styled.section`
  width: 100%;
  ${flexColumnCenterStart};
  gap: ${spacing.base};
  border-bottom: 1px solid ${colors["gray-200"]};
  padding-bottom: ${spacing["3xl"]};
  gap: ${spacing.xl};
`;

// Responsive grid for comments with gap of 4rem on medium screens and above
const CommentsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  ${generateResponsiveStyles("gap", { md: "4rem" })}
  ${generateResponsiveStyles("grid-template-columns", { md: "1fr 1fr" })}
`;
const SleepCard = styled.div`
  ${flexColumnStart};
  max-width: 32rem;
  width: 20rem;
  /* width: 32rem; */
  gap: ${spacing.sm};

  & img {
    border-radius: ${radii.sm};
  }
`;
const Location = () => {
  const { location, isFetchingLocationData, error } =
    useSelectedLocationContext();

  const [summary, setSummary] = useState({
    total: 0,
    numDays: 3,
  });
  useEffect(() => {
    setSummary({
      total: location?.price ? calculateTotals(location.price, 3).total : 0,
      numDays: 3,
    });
  }, [location?.price]);

  const { sentinelRef, isSticky } = useStickyToggle();

  const [photoRef, scrollToPhoto] = useScrollTo(100);
  const [amenitiesRef, scrollToAmenities] = useScrollTo(160);
  const [revsRef, scrollToReviews] = useScrollTo(120);
  const [locRef, scrollToLocation] = useScrollTo(120);
  const [reservationRef, scrollToReservation] = useScrollTo();

  const isMobile = useMedia(`(max-width: ${breakpoints.md}`);

  const locNavData = {
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
  };

  const {
    description,
    type,
    maxGuests,
    bedrooms,
    beds,
    bathrooms,
    host_id,
    reviews,
    rating,
    amenities,
  } = location;

  const { host } = useHostContext(host_id);
  const { name: hostName, photo } = host;

  // have spinner component and error components
  if (isFetchingLocationData) return <Spinner />;

  // error-state
  if (error) {
    return <p>Failed to fetch data please reload</p>;
  }

  return (
    <>
      <Header>
        <MainMenu />
      </Header>
      {/* Solve the issue location nav should not call the reservation or create a store for the reservation
      
      This dies not work well.
      */}
      <LocationNav
        locNavData={locNavData}
        isMobile={isMobile}
        location={location}
        summary={summary}
        onUpdate={setSummary}
        isSticky={isSticky}
      />
      <Container>
        <LocationHeader location={location} />
        <div ref={photoRef}>
          <LocationImages imagesSrc={location.images} />
        </div>

        <ContentBox>
          <Content>
            <ContentHeader>
              <FlexColumn $gap="sm">
                <H3 $size="xl">
                  Entire {type} hosted by {hostName}
                </H3>
                <FlexRow $gap="sm">
                  <TextXs>{maxGuests} Guest</TextXs>
                  <Middot $color="secondary" />
                  <TextXs>{bedrooms} bedroom</TextXs>
                  <Middot $color="secondary" />
                  <TextXs>{beds} bed</TextXs>
                  <Middot $color="secondary" />
                  <TextXs>{bathrooms} bath</TextXs>
                </FlexRow>
              </FlexColumn>
              <Avatar hostImg={photo} />
            </ContentHeader>
            <Section>
              {dataDetail.map((data, i) => (
                <DataDetail key={i} data={data} />
              ))}
            </Section>
            <Section>
              <Description text={description} />
            </Section>
            <Section>
              <H3>Where you will sleep</H3>
              <SleepCard>
                <ImageLoader src={BedroomImg} />
                <FlexColumn>
                  <TextBase $weight="medium">Bedroom</TextBase>
                  <TextSm>1 queen bed</TextSm>
                </FlexColumn>
              </SleepCard>
            </Section>
            <Section>
              <H3>What this place offers</H3>
              <Amenities amenitiesRef={amenitiesRef} amenities={amenities} />
            </Section>
            <Section>
              <H3>7 nights in New York</H3>
            </Section>
          </Content>
          {/* 
          1. by default the reservation should be closed
          2. when we click on reservation if on mobile open reservation
          3. and we can make a reservation
          4. once done close a reservation
          5. and on success give a user to see ther reservation
          
          
          */}
          {!isMobile && (
            <Reservation
              reservationRef={reservationRef}
              isMobile={isMobile}
              location={location}
              onUpdate={setSummary}
              sentinelRef={sentinelRef}
            />
          )}
        </ContentBox>

        <Section ref={revsRef}>
          <H3>
            <FlexRow $gap="sm">
              <FlexRow $gap="sm">
                <StarOutlineIcon $stroke="primary" />
                <span>{rating}</span>
              </FlexRow>
              <Middot $color="secondary" />
              <span $size="lg">{reviews} reviews</span>
            </FlexRow>
          </H3>
          <Ratings />
          {/* Render all comments in a responsive grid using styled-components */}
          <CommentsGrid>
            {comments.map((comment, i) => (
              <AirbnbComment key={i} {...comment} />
            ))}
          </CommentsGrid>
        </Section>

        <Section>
          <HostInfo host={host} reviews={reviews} />
        </Section>
        <Section ref={locRef}>
          <H3>Things to know</H3>
          <HouseRules />
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default Location;
