import styled from "styled-components";
import {
  colors,
  flexColumnStart,
  generateResponsiveStyles,
  spacing,
  typography,
} from "../design-system";
import { Link } from "react-router-dom";
import { TextBase, TextSm } from "./Paragraphs";
import { FlexRow } from "./Flex";
import Middot from "./Middot";
import { FacebookIcon, GlobeIcon, InstagramIcon, TwitterIcon } from "./Icons";

/**
 * StyledFooter
 * Main footer container with vertical layout, padding, and responsive spacing.
 */
const StyledFooter = styled.footer`
  ${flexColumnStart};
  gap: 4.8rem;
  padding: 3.2rem;
  background-color: ${colors["gray-50"]};

  margin-bottom: 5.5rem;
  ${generateResponsiveStyles("margin-bottom", { md: "0" })}
  ${generateResponsiveStyles("padding", { lg: "6.4rem 8rem 2.4rem 8rem" })}
`;

/**
 * StyledFooterNav
 * Grid layout for footer navigation sections (Support, Community, Hosting, About).
 * Responsive column count based on screen size.
 */
const StyledFooterNav = styled.nav`
  display: grid;
  align-items: start;
  grid-template-columns: 1fr;
  gap: 2.4rem;
  width: 100%;
  ul {
    ${flexColumnStart};
    gap: ${spacing.base};
  }
  ${generateResponsiveStyles("  grid-template-columns", {
    md: "1fr 1fr",
    lg: "repeat(4, 1fr)",
  })}
`;

/**
 * StyledNavLink
 * Styled link used throughout the footer.
 * Supports optional underline via `$textDecoration` prop.
 */
const StyledNavLink = styled(Link)`
  font-size: ${typography.sizes.sm};
  font-weight: ${typography.weights.regular};
  line-height: ${typography.lineHeights.normal};
  color: ${colors["gray-600"]};
  text-decoration: ${({ $textDecoration }) => $textDecoration || "none"};

  &:hover {
    text-decoration: ${({ $textDecoration }) =>
      $textDecoration ? "none" : "underline"};
  }
`;

/**
 * StyledSocial
 * Bottom section of the footer with legal links, language/currency options, and social icons.
 * Responsive layout switches from column to row.
 */
const StyledSocial = styled.div`
  ${flexColumnStart};
  gap: ${spacing.base};
  width: 100%;
  padding-top: ${spacing.lg};
  border-top: 1px solid ${colors["gray-200"]};
  ${generateResponsiveStyles("flex-direction", { md: "row" })}
  ${generateResponsiveStyles("justify-content", { md: "space-between" })}
`;

/**
 * Footer
 * Renders the full footer with navigation links, legal info, and social media icons.
 *
 * @returns {JSX.Element}
 */

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterNav>
        <ul>
          <TextBase $weight="medium">Support</TextBase>
          <li>
            <StyledNavLink>Help Center</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Safety information</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Cancellation options</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Our COVID-19 Response</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Supporting people with disabilities</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Report a neighborhoood concern</StyledNavLink>
          </li>
        </ul>
        <ul>
          <TextBase $weight="medium">Community</TextBase>
          <li>
            <StyledNavLink>Airbnb.org: disaster relief housing</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Support: Afghan refugees</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Celebrating diversity & belonging</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Combating discrimination</StyledNavLink>
          </li>
        </ul>
        <ul>
          <TextBase $weight="medium">Hosting</TextBase>
          <li>
            <StyledNavLink>Try hosting</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>AirCover: protection for Hosts</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Explore hosting resources</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Visit our community forum</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>How to host responsibly</StyledNavLink>
          </li>
        </ul>
        <ul>
          <TextBase $weight="medium">About</TextBase>
          <li>
            <StyledNavLink>Newsroom</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Learn about new features</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Letter from our founders</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Careers</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Investors</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Airbnb Luxe</StyledNavLink>
          </li>
        </ul>
      </StyledFooterNav>
      <StyledSocial>
        <FlexRow $gap="xs">
          <TextSm $color="gray-600">© 2022 Airbnb, Inc.</TextSm>
          <Middot $color="gray-600" />
          <StyledNavLink>Privacy</StyledNavLink>
          <Middot $color="gray-600" />
          <StyledNavLink>Terms</StyledNavLink>
          <Middot $color="gray-600" />
          <StyledNavLink>Sitemap</StyledNavLink>
        </FlexRow>
        <FlexRow $gap="xl">
          <FlexRow $gap="base">
            <FlexRow $gap="xs">
              <GlobeIcon $width="lg" $stroke="gray-600" />
              <StyledNavLink $textDecoration="underline">
                English (US)
              </StyledNavLink>
            </FlexRow>
            <FlexRow $gap="xs">
              <TextBase $color="gray-600">$</TextBase>
              <StyledNavLink $textDecoration="underline">USD</StyledNavLink>
            </FlexRow>
          </FlexRow>
          <FlexRow $gap="base">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </FlexRow>
        </FlexRow>
      </StyledSocial>
    </StyledFooter>
  );
};

export default Footer;
