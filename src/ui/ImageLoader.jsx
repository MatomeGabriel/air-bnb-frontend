import { useState } from "react";
import { Loader, Spinner } from "./Spinners";
import styled from "styled-components";
import { colors } from "../design-system";

/**
 * LoaderBg
 * A blurred background layer shown while the image is loading.
 */
const LoaderBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  background-color: ${colors.muted};
  filter: blur(1rem);
  border-radius: 100px;
`;

/**
 * ImageLoader
 * Displays an image with a loading spinner and blur effect until fully loaded.
 * Triggers a modal on click using the provided index.
 *
 * @param {Object} props
 * @param {string} props.src - Image source URL.
 * @param {string} props.alt - Alt text for the image.
 * @param {number} props.index - Index used for modal identification.
 * @param {Object} [props.style] - Optional inline styles for the image.
 * @param {string} [props.loaderSize] - Optional size for the loader spinner.
 * @param {boolean} [props.blur=true] - Whether to apply blur while loading.
 * @param {Function} props.onOpenModal - Callback to open modal with image index.
 * @returns {JSX.Element}
 */
const ImageLoader = ({
  src,
  alt,
  index,
  style,
  loaderSize,
  blur = true,
  onOpenModal,
}) => {
  const [loaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* {!loaded && } */}
      {!loaded && <Loader $loaderSize="5px" />}
      {!loaded && <LoaderBg src=""></LoaderBg>}
      <img
        alt={alt}
        src={src}
        onLoad={() => setIsLoaded(true)}
        onClick={() => onOpenModal(index)}
        style={{
          opacity: loaded ? 1 : 0,
          filter: loaded ? "none" : "blur(10px)",
          // transform: loaded ? "scale(1)" : "scale(0.95)",
          transition: "all 0.3s ease-in-out, opacity 0s",
          cursor: "pointer",
        }}
      />
    </>
  );
};

export default ImageLoader;
