import styled from "styled-components";
import { textBase } from "../design-system/mixins/mixins";
import { applyTypographyProps, typography } from "../design-system";

export const TextBase = styled.p`
  ${textBase}
  ${applyTypographyProps}
`;

export const TextSm = styled(TextBase)`
  font-size: ${typography.sizes.sm};
  line-height: auto;
`;

export const TextLg = styled(TextBase)`
  font-size: ${typography.sizes.lg};
`;
export const TextXs = styled(TextBase)`
  font-size: ${typography.sizes.xs};
  line-height: auto;
`;
