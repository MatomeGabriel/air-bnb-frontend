import styled from "styled-components";
import { radii } from "../../design-system";
import { SuperHostIcon } from "../../ui/Icons";
import ImageLoader from "../../ui/ImageLoader";

const StyledAvatar = styled.div`
  position: relative;
  width: 5.6rem;
  height: 5.6rem;
  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: ${radii.full};
  }

  & svg {
    position: absolute;
    bottom: 0;
    right: -6px;
    z-index: 4;
  }
`;

const Avatar = ({ hostImg }) => {
  return (
    <StyledAvatar>
      <ImageLoader src={hostImg} />
      <SuperHostIcon />
    </StyledAvatar>
  );
};

export default Avatar;
