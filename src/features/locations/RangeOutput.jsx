import styled from "styled-components";
import { colors, spacing } from "../../design-system";
import { FlexRow } from "../../ui/Flex";
import { TextXs } from "../../ui/Paragraphs";

const RangeBar = styled.div`
  width: 12rem;
  height: ${spacing.xs};
  background-color: ${colors["gray-200"]};
`;
const RangeFill = styled.div`
  background-color: ${colors.secondary};
  width: ${({ width }) => `${width}%`};
  height: 100%;
`;
const RangeOutput = ({ rating = 5.0 }) => {
  // const width = (rating * 100) / 5;
  const raw = Math.pow(rating / 5, 2);
  // ensures nothing goes over 100%
  const width = Math.min(raw * 100, 100).toFixed(1);

  return (
    <FlexRow $gap="sm">
      <RangeBar>
        <RangeFill width={width} />
      </RangeBar>
      <TextXs size="xs">{rating.toFixed(1)}</TextXs>
    </FlexRow>
  );
};

export default RangeOutput;
