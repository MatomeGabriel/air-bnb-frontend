/**
 * Ratings Component
 *
 * Displays a grid of rating categories (Cleanliness, Accuracy, Communication, etc.)
 * with their respective scores using RangeOutput.
 * Used in location details to show property ratings.
 */
import styled from "styled-components";
import { FlexRow } from "../../ui/Flex";
import { TextBase } from "../../ui/Paragraphs";
import RangeOutput from "./RangeOutput";
import { generateResponsiveStyles, spacing } from "../../design-system";

const StyledRatings = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  /* gap: 4rem; */
  row-gap: ${spacing.base};
  align-items: space-between;
  ${generateResponsiveStyles("grid-template-columns", {
    md: "1fr 1fr",
  })}

  ${generateResponsiveStyles("column-gap", { md: "16rem" })}
`;

const RatingRow = styled(FlexRow)`
  justify-content: space-between;
  width: 100%;
`;

const Ratings = () => {
  return (
    <StyledRatings>
      <RatingRow>
        <TextBase>Cleanliness</TextBase>
        <RangeOutput rating={4.6} />
      </RatingRow>
      <RatingRow>
        <TextBase>Accuracy</TextBase>
        <RangeOutput rating={5} />
      </RatingRow>
      <RatingRow>
        <TextBase>Communication</TextBase>
        <RangeOutput rating={5} />
      </RatingRow>
      <RatingRow>
        <TextBase>Location</TextBase>
        <RangeOutput rating={4.9} />
      </RatingRow>
      <RatingRow>
        <TextBase>Check-in</TextBase>
        <RangeOutput rating={5} />
      </RatingRow>
      <RatingRow>
        <TextBase>Value</TextBase>
        <RangeOutput rating={4.7} />
      </RatingRow>
    </StyledRatings>
  );
};

export default Ratings;
