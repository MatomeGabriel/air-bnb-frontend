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

/**
 * Avatar
 *
 * Displays a circular host avatar image with a SuperHost badge overlay.
 * Uses `ImageLoader` for optimized image rendering and fallback handling.
 *
 * @param {Object} props
 * @param {string} props.hostImg - URL of the host's profile image
 *
 * @returns {JSX.Element} Styled avatar with badge
 *
 * @example
 * <Avatar hostImg="https://example.com/photo.jpg" />
 */
const Avatar = ({ hostImg }) => {
  return (
    <StyledAvatar>
      <ImageLoader src={hostImg} />
      <SuperHostIcon />
    </StyledAvatar>
  );
};

export default Avatar;
