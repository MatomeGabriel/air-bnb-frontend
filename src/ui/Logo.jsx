import styled from "styled-components";
import { LogoIcon } from "./Icons";
import { Link } from "react-router-dom";

/**
 * StyledLogoContainer
 * A flex container that wraps the logo icon and links to the homepage.
 */
const StyledLogoContainer = styled(Link)`
  display: flex;
  align-items: center;
`;

/**
 * Icon
 * A styled version of the LogoIcon with customizable fill color.
 *
 * Props:
 * - $color: Fill color for the SVG path.
 */
const Icon = styled(LogoIcon)`
  width: 10.2rem;
  height: 3.2rem;
  & path {
    fill: ${({ $color }) => $color};
  }
`;

/**
 * Logo
 * Renders the brand logo as a link to the homepage.
 *
 * @param {Object} props
 * @param {string} props.$color - Color used to fill the logo icon.
 * @returns {JSX.Element}
 */

const Logo = ({ $color }) => {
  return (
    <StyledLogoContainer to="/">
      <Icon $color={$color} />
    </StyledLogoContainer>
  );
};

export default Logo;
