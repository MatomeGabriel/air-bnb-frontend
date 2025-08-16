import styled from "styled-components";
import {
  column,
  flexColumnCenter,
  generateResponsiveStyles,
  spacing,
} from "../design-system";
import { H2 } from "./Heading";
import GiftCardImg from "../assets/giftCard.jpg";
import { ButtonSolidDarkLg } from "./Buttons";

const StyledGiftCardSection = styled.section`
  ${flexColumnCenter}
  gap: ${spacing["xl"]};
  ${generateResponsiveStyles("flex-direction", { lg: "row" })}
  ${generateResponsiveStyles("gap", { lg: spacing["2xl"] })}
`;
const Left = styled.div`
  ${column}
  gap: ${spacing.lg};
  ${generateResponsiveStyles("width", { lg: "30%" })}
  ${generateResponsiveStyles("align-items", { lg: "start" })}
`;
const Right = styled.div`
  width: 100%;
  ${generateResponsiveStyles("width", { md: "80%" })}
  ${generateResponsiveStyles("width", { lg: "70%" })}
`;
const GiftCardSection = () => {
  return (
    <StyledGiftCardSection>
      <Left>
        <H2 $size="5xl">Shop Airbnb gift cards</H2>
        <ButtonSolidDarkLg $radius="sm">Learn more</ButtonSolidDarkLg>
      </Left>
      <Right>
        <img src={GiftCardImg} alt="" />
      </Right>
    </StyledGiftCardSection>
  );
};

export default GiftCardSection;
