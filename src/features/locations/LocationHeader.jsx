import styled from "styled-components";
import { H1 } from "../../ui/Heading";
import { BadgeIcon, StarIcon, ShareIcon, HeartIconBold } from "../../ui/Icons";
import { IconButton } from "../../ui/Buttons";
import { FlexRow } from "../../ui/Flex";
import { applyFlexProps, column } from "../../design-system";
import { IconLabel } from "../../ui/IconLabel";
import Middot from "../../ui/Middot";
import { TextSm } from "../../ui/Paragraphs";

const StyledLocationHeader = styled.header`
  ${column}
  align-items: start;
  ${applyFlexProps}
`;

const LocationHeader = () => {
  return (
    <StyledLocationHeader $gap="sm">
      <H1>Bordeaux Getaway</H1>
      <FlexRow $width="100%" $justify="space-between">
        <FlexRow $gap="sm">
          <IconLabel $gap="xs">
            <StarIcon $width="sm-md" $stroke="card-3" />
            <TextSm size="sm">5.0</TextSm>
          </IconLabel>
          <Middot $color="gray-500" />
          <TextSm $decoration="underline" $weight="medium">
            7 reviews
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
        <FlexRow $gap="base">
          <IconButton $gap="xs" as="button">
            <ShareIcon />
            <TextSm $weight="medium">Share</TextSm>
          </IconButton>
          <IconButton $gap="xs" as="button">
            <HeartIconBold />
            <TextSm $weight="medium">Save</TextSm>
          </IconButton>
        </FlexRow>
      </FlexRow>
    </StyledLocationHeader>
  );
};

export default LocationHeader;
