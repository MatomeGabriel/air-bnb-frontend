import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

import { boxShadow, radii, spacing } from "../../design-system";
import IMG from "../../assets/Woodmead.jpg";
import { ButtonOutlineDarkSm } from "../../ui/Buttons";
import { ShowMoreIcon } from "../../ui/Icons";
import ImageLoader from "../../ui/ImageLoader";
import { generateImgURL } from "../../utils/generateImgURL";
import { useState } from "react";
import { ROUTES } from "../../utils/routes";

const StyledLocationImages = styled.div`
  display: grid;
  gap: ${spacing.sm};
  border-radius: ${radii.md};
  box-shadow: ${boxShadow.base};
  /* dynamic grid */
  grid-template-columns: ${({ $gridCols }) =>
    $gridCols ? `repeat(${$gridCols}, 1fr)` : " 2fr 1fr 1fr;"};
  height: 40rem;
  max-width: 100%;
  overflow: hidden;
  position: relative;

  & button {
    position: absolute;
    right: 3rem;
    bottom: 3rem;
  }

  & img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  ${({ $gridCols }) =>
    !$gridCols &&
    `& img:first-child {
    grid-column: 1/2;
    grid-row: 1 / span 2;
  }`}
`;

const AnimatedDiv = styled(motion.div)`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  background-color: rgba(0, 0, 0, 0.9);
`;

const AnimatedImg = styled(motion.img)`
  border-radius: 0.75rem;
  max-height: 80%;
  max-width: 90%;
`;

const BaseButton = styled.button`
  position: absolute;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  background: transparent;
`;

const NavButton = styled(BaseButton)`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const PrevButton = styled(NavButton)`
  left: 3.2rem;
`;

const NextButton = styled(NavButton)`
  right: 3.2rem;
`;

const CloseButton = styled(BaseButton)`
  top: 1.25rem;
  right: 1.25rem;
  font-size: 1.875rem;
`;

const LocationImages = ({ imagesSrc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const swipeHandler = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    preventScrollOnSwipe: true, // prevents page scroll during swipe
    trackMouse: true,
  });

  const openModal = (index = 0) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % imagesSrc.length);
    setDirection(1);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + imagesSrc.length) % imagesSrc.length);
    setDirection(-1);
  };

  /**
   * Limits display images to 5 images
   */
  const gridImages = imagesSrc.length > 5 ? imagesSrc.slice(0, 5) : imagesSrc;
  const gridImagesLength = gridImages.length;

  return (
    <>
      <StyledLocationImages
        id={ROUTES.sectionPhotos}
        $gridCols={gridImagesLength < 5 ? gridImagesLength : false}
      >
        {gridImages.map((imageSrc, i) => (
          <ImageLoader
            key={i}
            src={generateImgURL(imageSrc)}
            index={i}
            onOpenModal={openModal}
          />
        ))}

        <ButtonOutlineDarkSm onClick={() => openModal(0)}>
          <ShowMoreIcon />
          <span>Show all photos</span>
        </ButtonOutlineDarkSm>
      </StyledLocationImages>
      <AnimatePresence>
        {isOpen && (
          <AnimatedDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AnimatedImg
              {...swipeHandler}
              key={currentIndex}
              custom={direction}
              src={generateImgURL(imagesSrc[currentIndex])}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
            <PrevButton onClick={prevImage}>‹</PrevButton>
            <NextButton onClick={nextImage}> ›</NextButton>
            <CloseButton onClick={closeModal}>X</CloseButton>
          </AnimatedDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default LocationImages;
