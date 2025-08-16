import styled from "styled-components";
import { boxShadow, radii, spacing } from "../../design-system";
import IMG from "../../assets/Woodmead.jpg";
import { ButtonOutlineDarkSm } from "../../ui/Buttons";
import { ShowMoreIcon } from "../../ui/Icons";

const StyledLocationImages = styled.div`
  display: grid;
  gap: ${spacing.sm};
  border-radius: ${radii.md};
  box-shadow: ${boxShadow.base};
  grid-template-columns: 2fr 1fr 1fr;
  height: 40rem;
  max-width: 100%;
  overflow: hidden;
  position: relative;

  & button {
    position: absolute;
    right: 3rem;
    bottom: 3rem;
  }
`;

const Img = styled.img`
  object-fit: cover;
  /* aspect-ratio: 1 / 1; */
`;
const Img1 = styled(Img)`
  background-color: blue;
  height: 100%;
  width: 100%;

  grid-column: 1/2;
  grid-row: 1 / span 2;
`;

const Img2 = styled(Img)`
  background-color: red;
  height: 100%;
`;
const Img3 = styled(Img)`
  background-color: green;
  height: 100%;
`;
const Img4 = styled(Img)`
  background-color: yellow;
  height: 100%;
`;
const Img5 = styled(Img)`
  background-color: orangered;
  height: 100%;
`;

const LocationImages = () => {
  return (
    <StyledLocationImages>
      <Img1 src={IMG} />
      <Img2 src={IMG} />
      <Img3 src={IMG} />
      <Img4 src={IMG} />
      <Img5 src={IMG} />
      {/* <BUttonDar>
        <span>Show all photos</span>
      </BUttonDar> */}
      <ButtonOutlineDarkSm>
        <ShowMoreIcon />
        <span>Show all photos</span>
      </ButtonOutlineDarkSm>
    </StyledLocationImages>
  );
};

export default LocationImages;
