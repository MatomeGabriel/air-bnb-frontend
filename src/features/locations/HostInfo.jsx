import { generateResponsiveStyles, spacing } from "../../design-system";
import { ButtonOutlineDarkForm } from "../../ui/Buttons";
import { FlexColumn, FlexRow } from "../../ui/Flex";
import { H3 } from "../../ui/Heading";
import {
  BadgeIcon,
  FrameIcon,
  ShieldTickOutlineIcon,
  StarOutlineIcon,
} from "../../ui/Icons";
import { TextBase, TextXs } from "../../ui/Paragraphs";
import Avatar from "./Avatar";
import styled from "styled-components";

const HostIconLabel = styled(FlexRow)`
  gap: ${spacing.xs};
  justify-content: center;
`;

const HostContent = styled(FlexColumn)`
  gap: ${spacing.base};
  width: 100%;
  ${generateResponsiveStyles("width", { md: "44rem" })};
`;

const HostInfo = ({ host, reviews }) => {
  const { name, photo } = host;
  return (
    <FlexColumn $gap="xl">
      <FlexColumn as="header" $gap="base">
        <FlexRow $gap="lg">
          <Avatar hostImg={photo} />
          <FlexColumn>
            <H3>Hosted by {name}</H3>
            <TextXs $color="gray-500">Joined May 2021</TextXs>
          </FlexColumn>
        </FlexRow>
        <FlexRow $gap="lg">
          <HostIconLabel>
            <StarOutlineIcon $width="base" $stroke="primary" />
            <TextXs>{reviews} Reviews</TextXs>
          </HostIconLabel>
          <HostIconLabel>
            <ShieldTickOutlineIcon $width="base" $stroke="primary" />
            <TextXs>Identity verified</TextXs>
          </HostIconLabel>
          <HostIconLabel>
            <BadgeIcon $width="base" $stroke="primary" />
            <TextXs>Superhost</TextXs>
          </HostIconLabel>
        </FlexRow>
      </FlexColumn>
      <HostContent>
        <TextBase $weight="medium">{name} is a Superhost</TextBase>
        <TextBase $color="gray-500">
          Superhosts are experienced, highly rated hosts who are committed to
          providing great stays for guests.
        </TextBase>
        <TextBase $color="gray-500">Response rate: 100%</TextBase>
        <TextBase $color="gray-500">Response time: within an hour</TextBase>
      </HostContent>
      <ButtonOutlineDarkForm>Contact Host</ButtonOutlineDarkForm>
      <FlexRow $width="28rem" $gap="base" $align="start">
        <FrameIcon />
        <TextXs $color="gray-500">
          To protect your payment, never transfer money or communicate outside
          of the Airbnb website or app.
        </TextXs>
      </FlexRow>
    </FlexColumn>
  );
};

export default HostInfo;
