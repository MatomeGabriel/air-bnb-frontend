/**
 * HouseRules Component
 *
 * Displays a list of house rules for a location in a responsive, styled layout.
 * Uses icons and TextSm to clearly communicate important rules to guests.
 * Styling is based on the design system for consistency.
 */
import styled from "styled-components";
import {
  CalendarCheck,
  CalendarX,
  KeyRound,
  ShieldCheck,
  Users,
  Baby,
  Bell,
  Ban,
  Dog,
  Lock,
  PartyPopper,
} from "lucide-react";
import { generateResponsiveStyles, spacing } from "../../design-system";
import { TextSm } from "../../ui/Paragraphs";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${generateResponsiveStyles("grid-template-columns", { md: "1fr 1fr 1fr" })};
  gap: ${spacing["2xl"]};
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${spacing.base};
`;

const RuleItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${spacing["sm-md"]};
`;

const IconWrapper = styled.div`
  margin-top: 2px;
  color: #333;
`;

const HouseRules = () => {
  return (
    <Container>
      <Column>
        <RuleItem>
          <IconWrapper>
            <CalendarCheck size={20} />
          </IconWrapper>
          <TextSm>Check-in: After 4:00 PM</TextSm>
        </RuleItem>
        <RuleItem>
          <IconWrapper>
            <CalendarX size={20} />
          </IconWrapper>
          <TextSm>Checkout: 10:00 AM</TextSm>
        </RuleItem>
        <RuleItem>
          <IconWrapper>
            <KeyRound size={20} />
          </IconWrapper>
          <TextSm>Self check-in with lockbox</TextSm>
        </RuleItem>
        <RuleItem>
          <IconWrapper>
            <ShieldCheck size={20} />
          </IconWrapper>
          <TextSm>Committed to Airbnb's enhanced cleaning process</TextSm>
        </RuleItem>
      </Column>

      <Column>
        <RuleItem>
          <IconWrapper>
            <Users size={20} />
          </IconWrapper>
          <TextSm>Airbnb's COVID-19 guidelines apply</TextSm>
        </RuleItem>
        <RuleItem>
          <IconWrapper>
            <Baby size={20} />
          </IconWrapper>
          <TextSm>Not suitable for infants (under 2 years)</TextSm>
        </RuleItem>
        <RuleItem>
          <IconWrapper>
            <Bell size={20} />
          </IconWrapper>
          <TextSm>Carbon monoxide alarm</TextSm>
        </RuleItem>
        <RuleItem>
          <IconWrapper>
            <Ban size={20} />
          </IconWrapper>
          <TextSm>No smoking</TextSm>
        </RuleItem>
      </Column>

      <Column>
        <RuleItem>
          <IconWrapper>
            <Bell size={20} />
          </IconWrapper>
          <TextSm>Smoke alarm</TextSm>
        </RuleItem>
        <RuleItem>
          <IconWrapper>
            <Dog size={20} />
          </IconWrapper>
          <TextSm>No pets</TextSm>
        </RuleItem>
        <RuleItem>
          <IconWrapper>
            <Lock size={20} />
          </IconWrapper>
          <TextSm>Security Deposit: Up to $566 for damages</TextSm>
        </RuleItem>
        <RuleItem>
          <IconWrapper>
            <PartyPopper size={20} />
          </IconWrapper>
          <TextSm>No parties or events</TextSm>
        </RuleItem>
      </Column>
    </Container>
  );
};

export default HouseRules;
