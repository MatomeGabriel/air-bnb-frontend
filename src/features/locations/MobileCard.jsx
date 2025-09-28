import styled, { css } from "styled-components";
import {
  applyCSSProperty,
  boxShadow,
  colors,
  flexColumnStart,
  flexRowStartCenter,
  generateResponsiveStyles,
  radii,
  spacing,
} from "../../design-system";
import { TextBase, TextSm, TextXs } from "../../ui/Paragraphs";
import Middot from "../../ui/Middot";
import { StarIcon } from "../../ui/Icons";
import { Link } from "react-router-dom";
import { generateImgURL } from "../../utils/generateImgURL";
import ButtonActions from "./ButtonActions";

const CardMobile = styled.article`
  width: 100%;
  transition: all 0.3s;
  ${flexColumnStart};
  gap: 1.6rem;
  border-radius: ${radii.md};
  padding-bottom: ${spacing.md};

  &:hover {
    transform: translateY(-0.4rem);
    box-shadow: ${boxShadow.xs};
  }
  & a {
    ${flexColumnStart};
    gap: ${spacing.xs};
    text-decoration: none;
    border-radius: ${radii.md};
  }
  & > div {
    padding: 0 ${spacing.sm};
  }

  & button {
    height: 4rem;
  }
`;

const ImgMobile = styled.img`
  width: 100%;
  background-color: #222;
  border-radius: ${radii.md} ${radii.md} 0 0;
`;

const FlexRow = styled.div`
  ${flexRowStartCenter}
  ${(props) => css`
    ${applyCSSProperty("gap", props.$gap, spacing)}
  `}
`;

const MobileContent = styled.div`
  padding: ${spacing.sm};
  & p {
    color: ${colors["gray-600"]};
  }
`;
export const MobileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.2rem;
  align-items: start;
  ${generateResponsiveStyles("grid-template-columns", { sm: "1fr 1fr" })};
  padding-top: 2.4rem;
`;

const Title = styled(TextBase)`
  color: ${colors["gray-700"]};
`;

const MobileCard = ({ place }) => {
  return (
    <CardMobile>
      <Link to={`/locations/${place._id}`}>
        <ImgMobile src={generateImgURL(place.images[0])} />

        <MobileContent>
          <Title $weight="medium" as="h3">
            {place.title}
          </Title>
          <FlexRow $gap="sm">
            <TextXs $weight="medium">${place.price} per night</TextXs>
            <Middot />
            <FlexRow $gap="xs">
              <StarIcon $width="sm" $fill="gray-500" />
              <TextXs>{place.rating}</TextXs>
            </FlexRow>
          </FlexRow>
        </MobileContent>
      </Link>
      <ButtonActions $size="sm" _id={place._id} $mobile={true} />
    </CardMobile>
  );
};

export default MobileCard;
