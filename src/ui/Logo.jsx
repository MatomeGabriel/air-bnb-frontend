import styled from "styled-components";
import { LogoIcon } from "./Icons";
import { Link } from "react-router-dom";

const StyledLogoContainer = styled(Link)`
  display: flex;
  align-items: center;
`;

const Icon = styled(LogoIcon)`
  width: 10.2rem;
  height: 3.2rem;
  & path {
    fill: ${({ $color }) => $color};
  }
`;

const Logo = ({ $color }) => {
  return (
    <StyledLogoContainer>
      <Icon $color={$color} />
    </StyledLogoContainer>
  );
};

export default Logo;
