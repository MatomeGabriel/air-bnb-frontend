import styled from "styled-components";
import {
  applyFlexProps,
  boxShadow,
  colors,
  flexRowCenter,
  gradients,
  radii,
  spacing,
  typography,
} from "../design-system";

export const ButtonBase = styled.button`
  ${flexRowCenter};
  color: ${colors.white};
  border-radius: ${spacing.sm};
  font-size: ${typography.sizes.sm};
  line-height: ${typography.lineHeights.tight};
  gap: ${spacing.sm};
  font-weight: ${typography.weights.medium};
  border: none;
  height: 3.6rem;
  padding: 0 ${spacing.md};
  width: auto;
  border-radius: ${({ $radius }) => $radius && radii[$radius || "pill"]};
  ${({ $width }) =>
    $width &&
    `
    width: ${$width}!important;
  `}

  &:hover {
    box-shadow: ${boxShadow.sm};
  }
`;
export const ButtonPrimarySm = styled(ButtonBase)`
  background: ${gradients.button};
  background-size: 200% 100%;
  background-position: left center;
  transition: background-position 0.3s ease;
  &:hover {
    background-position: right center;
  }
  &:disabled {
    background-color: ${colors.muted};
    color: ${colors.white};
  }
`;

export const ButtonPrimarySmFull = styled(ButtonPrimarySm)`
  width: 100%;
`;

export const ButtonPrimaryMd = styled(ButtonPrimarySm)`
  height: 4.4rem;
`;
export const ButtonPrimaryMdFull = styled(ButtonPrimarySmFull)`
  height: 4.4rem;
`;
export const ButtonPrimaryFormFull = styled(ButtonPrimarySmFull)`
  height: 4.8rem;
`;
export const ButtonPrimaryLg = styled(ButtonPrimarySm)`
  height: 5.6rem;
`;
export const ButtonPrimaryLgFull = styled(ButtonPrimarySmFull)`
  height: 5.6rem;
`;

export const ButtonSolidSm = styled(ButtonBase)`
  background-color: ${({ $color }) => colors[$color || "primary"]};
  transition: all 0.3s;
  &:hover {
    filter: brightness(0.85);
  }
`;

export const ButtonSolidMd = styled(ButtonSolidSm)`
  padding: 0 2.4rem;
  height: 4.4rem;
  border-radius: ${({ $radius }) => radii[$radius || "pill"]};
`;

export const ButtonSolidDarkMdFull = styled(ButtonSolidMd)`
  background-color: ${colors.secondary};
  color: ${colors.white};
  width: 100%;
`;

export const ButtonSolidLg = styled(ButtonSolidSm)`
  padding: 0 2.4rem;
  height: 5.6rem;
  border-radius: ${({ $radius }) => radii[$radius || "pill"]};
`;

export const ButtonSolidLightLg = styled(ButtonSolidLg)`
  background-color: ${colors.white};
  color: ${colors.secondary};
`;
export const ButtonSolidDarkLg = styled(ButtonSolidLg)`
  background-color: ${colors.secondary};
  color: ${colors.white};
`;

export const IconButton = styled.button`
  ${flexRowCenter};
  ${applyFlexProps};
  border: none;
  background: none;
`;

export const ButtonOutlineDarkSm = styled(ButtonBase)`
  background-color: ${colors.white};
  border: 1px solid ${colors.secondary};
  color: ${colors.secondary};
  transition: all 0.3s;
  &:hover {
    border: 1px solid #777;
    color: #777;
  }
`;

export const ButtonOutlineDarkMdFull = styled(ButtonOutlineDarkSm)`
  height: 4.4rem;
  width: 100%;
`;

export const ButtonOutlineDarkForm = styled(ButtonOutlineDarkSm)`
  height: 4.8rem;
`;

export const ButtonOutline = styled(ButtonBase)`
  background-color: ${colors.white};
  border: 1px solid ${({ $color }) => colors[$color] || colors["gray-200"]};
  color: ${({ $color }) => colors[$color] || colors["gray-700"]};
  border-radius: ${({ $radius }) => radii[$radius || "pill"]};
  box-shadow: ${boxShadow.xs};
`;
