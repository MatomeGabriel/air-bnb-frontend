import styled from "styled-components";
import { FlexRow } from "../../ui/Flex";
import { TextBase } from "../../ui/Paragraphs";
import RangeOutput from "./RangeOutput";
import { spacing } from "../../design-system";

const StyledRatings = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  /* gap: 4rem; */
  row-gap: ${spacing.base};
  column-gap: ${spacing["2xl"]};
`;

const RatingRow = styled(FlexRow)`
  justify-content: space-between;
  /* padding-right: 2.4rem; */
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
