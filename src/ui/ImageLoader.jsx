import { useState } from "react";
import { Loader, Spinner } from "./Spinners";
import styled from "styled-components";

const LoaderBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  /* background-color: #9b8683; */
  filter: blur(1rem);
  border-radius: 100px;
`;
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
