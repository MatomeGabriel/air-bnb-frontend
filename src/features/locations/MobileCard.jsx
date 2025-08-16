import styled, { css } from "styled-components";
import {
  applyCSSProperty,
  flexColumnStart,
  flexRowStartCenter,
  generateResponsiveStyles,
  radii,
  Row,
  spacing,
} from "../../design-system";
import { TextSm, TextXs } from "../../ui/Paragraphs";
import Middot from "../../ui/Middot";
import { StarIcon } from "../../ui/Icons";
import Img1 from "../../assets/Hyde.jpg";
import { Link } from "react-router-dom";

const CardMobile = styled.article`
  transition: all 0.3s;
  &:hover {
    transform: translateY(-0.4rem);
    filter: brightness(0.8);
  }
  & a {
    ${flexColumnStart};
    gap: ${spacing.xs};
    text-decoration: none;
    border-radius: ${radii.md};
  }
`;

const ImgMobile = styled.img`
  width: 100%;
  background-color: #222;
  border-radius: ${radii.md};
`;

const FlexRow = styled.div`
  ${flexRowStartCenter}
  ${(props) => css`
    ${applyCSSProperty("gap", props.$gap, spacing)}
  `}
`;

const MobileContent = styled.div`
  padding: 0 2px;
`;
export const MobileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
  ${generateResponsiveStyles("grid-template-columns", { sm: "1fr 1fr" })}
`;

const ImgDesktop = styled.img`
  width: 30rem;
  height: 20rem;
`;

const MobileCard = () => {
  return (
    <CardMobile>
      <Link to="/:id">
        <ImgMobile src={Img1} />

        <MobileContent>
          <TextSm $weight="semiBold">Entire home in Bordeaux</TextSm>
          <FlexRow>
            <TextXs>R1,744 ZAR for 2 nights</TextXs>
            <Middot />
            <FlexRow $gap="xs">
              <StarIcon $width="sm" />
              <TextXs>5.0</TextXs>
            </FlexRow>
          </FlexRow>
        </MobileContent>
      </Link>
    </CardMobile>
  );
};

export default MobileCard;
