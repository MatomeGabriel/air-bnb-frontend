import styled from "styled-components";
import {
  applyFlexProps,
  applySpacing,
  flexColumnStart,
  flexRowStartCenter,
} from "../design-system";

export const FlexColumn = styled.div`
  ${flexColumnStart}
  ${applyFlexProps}
`;
export const FlexRow = styled.div`
  ${flexRowStartCenter}
  ${applyFlexProps}
  ${applySpacing}
`;
