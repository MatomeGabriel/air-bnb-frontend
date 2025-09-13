import styled, { css } from "styled-components";
import { colors, headingBase, textShadows, typography } from "../design-system";
import {
  applyColor,
  applyResponsiveFontSize,
  applyTextShadow,
} from "../design-system/mixins/mixins";

const Heading = styled.h1`
  font-size: ${({ $size }) => typography.sizes[$size || "2xl"]};
  color: ${({ $color }) => colors[$color || "secondary"]};
  text-shadow: ${({ $textShadow }) => textShadows[$textShadow]};

  ${({ $size }) =>
    $size === "xxl" &&
    css`
      width: 46.5rem;
      line-height: 1;
    `}
`;

export const H1 = styled.h1`
  ${headingBase}
  font-size: 2.4rem;
  ${({ $color }) => applyColor($color)}
  ${({ $size }) => applyResponsiveFontSize($size)}
  ${({ $textShadow }) => applyTextShadow($textShadow)}
`;

export const H2 = styled.h2`
  ${headingBase}
  font-size: 2rem;
  ${({ $color }) => applyColor($color)}
  ${({ $size }) => applyResponsiveFontSize($size)}
`;
export const H3 = styled.h3`
  ${headingBase}
  font-size:1.8rem;
  ${({ $color }) => applyColor($color)}
  ${({ $size }) => applyResponsiveFontSize($size)}
`;

export default Heading;
