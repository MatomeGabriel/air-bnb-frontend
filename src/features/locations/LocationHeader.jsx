import styled from "styled-components";
import { H1 } from "../../ui/Heading";
import {
  BadgeIcon,
  StarIcon,
  ShareIcon,
  HeartIconBold,
  StarOutlineIcon,
} from "../../ui/Icons";
import { IconButton } from "../../ui/Buttons";
import { FlexRow } from "../../ui/Flex";
import {
  applyFlexProps,
  column,
  generateResponsiveStyles,
  spacing,
} from "../../design-system";
import { IconLabel } from "../../ui/IconLabel";
import Middot from "../../ui/Middot";
import { TextSm } from "../../ui/Paragraphs";

const StyledLocationHeader = styled.header`
  ${column}
  align-items: start;
  ${applyFlexProps}
`;

const QuickActions = styled(FlexRow)`
  gap: ${spacing.base};
  display: none;
  ${generateResponsiveStyles("display", { md: "flex" })}
`;

const LocationHeader = ({ location }) => {
  const { title, rating, reviews } = location;
  return (
    <StyledLocationHeader $gap="sm">
      <H1 $size="3xl">{title}</H1>
      <FlexRow $width="100%" $justify="space-between">
        <FlexRow $gap="sm">
          <IconLabel $gap="xs">
            <StarOutlineIcon $width="base" $stroke="card-3" />
            <TextSm size="sm">{rating}</TextSm>
          </IconLabel>
          <Middot $color="gray-500" />
          <TextSm $decoration="underline" $weight="medium">
            {reviews} reviews
          </TextSm>
          <Middot $color="gray-500" />
          <IconLabel gap="xxs">
            <BadgeIcon />
            <TextSm $color="gray-500">Superhost</TextSm>
          </IconLabel>
          <Middot $color="gray-500" />
          <TextSm $weight="medium" $decoration="underline" $color="gray-500">
            Bordeaux, France
          </TextSm>
        </FlexRow>
        <QuickActions>
          <IconButton $gap="xs" as="button">
            <ShareIcon />
            <TextSm $weight="medium">Share</TextSm>
          </IconButton>
          <IconButton $gap="xs" as="button">
            <HeartIconBold />
            <TextSm $weight="medium">Save</TextSm>
          </IconButton>
        </QuickActions>
      </FlexRow>
    </StyledLocationHeader>
  );
};

export default LocationHeader;
