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

/**
 * RangeOutput
 *
 * Displays a visual bar representation of a rating value (0–5) using a filled range bar.
 * Applies a quadratic scaling to emphasize higher ratings visually.
 *
 * Features:
 * - Scales rating using (rating / 5)² for smoother visual distribution
 * - Caps fill width at 100%
 * - Displays numeric rating alongside the bar
 *
 * @param {Object} props
 * @param {number} [props.rating=5.0] - Rating value between 0 and 5
 *
 * @returns {JSX.Element} A styled range bar with rating value
 *
 * @example
 * <RangeOutput rating={4.6} />
 */

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
