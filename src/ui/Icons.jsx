import styled, { css } from "styled-components";
import SearchIconRaw from "../assets/Search.svg?react";
import HeartOutlineRaw from "../assets/heart-outline.svg?react";
import ProfileOutlineRaw from "../assets/profile-outline.svg?react";
import LogoIconRaw from "../assets/logoText.svg?react";
import MenuIconRaw from "../assets/Menu.svg?react";
import AvatarIconRaw from "../assets/Avatar.svg?react";
import ChevLeftIconRaw from "../assets/chevLeft.svg?react";
import StarIconRaw from "../assets/star.svg?react";
import SearchIconRawSm from "../assets/searchSm.svg?react";
import BadgeIconRaw from "../assets/badge.svg?react";
import ShareIconRaw from "../assets/share.svg?react";
import HeartIconBoldRaw from "../assets/heartBold.svg?react";
import ShowMoreIconRaw from "../assets/showMore.svg?react";
import ProfileUploadIconRaw from "../assets/ProfileUpload.svg?react";
import CloudUploadIconRaw from "../assets/cloudUpload.svg?react";
import GlobeIconRaw from "../assets/globe.svg?react";
import DatabaseFullIconRaw from "../assets/databaseFull.svg?react";
import CloudSolidFullIconRaw from "../assets/cloudSolidFull.svg?react";
import xMarkFullFullIconRaw from "../assets/xMarkFull.svg?react";
import TrashCanRegularIconRaw from "../assets/trashCanRegular.svg?react";
import WarningIconRaw from "../assets/warning.svg?react";

import {
  applyCSSProperty,
  applySquareSize,
  applySvgProps,
  colors,
  spacing,
} from "../design-system";

export const DatabaseFullIcon = styled(DatabaseFullIconRaw)`
  width: 2rem;
  height: 2rem;
  ${applySquareSize};
  ${applySvgProps};
`;
export const WarningIcon = styled(WarningIconRaw)`
  width: 3rem;
  ${applySvgProps};
`;
export const TrashCanRegularIcon = styled(TrashCanRegularIconRaw)`
  width: ${spacing.md};
  height: ${spacing.md};
  ${applySquareSize};
  ${applySvgProps};
`;

export const CloudSolidFullIcon = styled(CloudSolidFullIconRaw)`
  width: 2rem;
  height: 2rem;
  ${applySquareSize};
  ${applySvgProps};
`;

export const XMarkFullFullIcon = styled(xMarkFullFullIconRaw)`
  width: ${spacing.md};
  height: ${spacing.md};
  ${applySquareSize};
  ${applySvgProps};
`;

export const SearchIcon = styled(SearchIconRaw)`
  width: ${spacing.lg};
  height: ${spacing.lg};
  ${applySquareSize}
`;

export const GlobeIcon = styled(GlobeIconRaw)`
  width: ${spacing.lg};
  height: ${spacing.lg};
  ${applySquareSize}
  ${applySvgProps}
`;

export const CloudUploadIcon = styled(CloudUploadIconRaw)`
  width: 2rem;
  height: 2rem;
  ${applySquareSize}
`;
export const ShareIcon = styled(ShareIconRaw)`
  width: ${spacing.base};
  height: ${spacing.base};
  ${applySquareSize}
`;
export const ProfileUploadIcon = styled(ProfileUploadIconRaw)`
  width: 17.2rem;
  height: 17.2rem;
  /* ${applySquareSize} */
`;

export const HeartIconBold = styled(HeartIconBoldRaw)`
  width: ${spacing.base};
  height: ${spacing.base};
  ${applySquareSize}
`;
export const ShowMoreIcon = styled(ShowMoreIconRaw)`
  width: 2rem;
  height: 2rem;
  ${applySquareSize}
`;

export const BadgeIcon = styled(BadgeIconRaw)`
  width: ${spacing.base};
  height: ${spacing.base};
  ${applySquareSize}
`;
export const SearchIconSm = styled(SearchIconRawSm)`
  width: 2rem;
  height: 2rem;
  ${applySquareSize}
`;
export const HeartOutline = styled(HeartOutlineRaw)`
  width: ${spacing.lg};
  height: ${spacing.lg};
`;

export const ProfileOutline = styled(ProfileOutlineRaw)`
  width: ${spacing.lg};
  height: ${spacing.lg};
`;
export const LogoIcon = styled(LogoIconRaw)`
  /* width: auto; */
`;

export const MenuIcon = styled(MenuIconRaw)`
  width: ${spacing.lg};
  height: ${spacing.lg};
`;
export const AvatarIcon = styled(AvatarIconRaw)`
  /* width: ${spacing.xl};
  height: ${spacing.xl}; */
  width: 3.6rem;
  height: 3.6rem;
`;
export const ChevLeftIcon = styled(ChevLeftIconRaw)`
  width: ${spacing.lg};
  height: ${spacing.lg};
  & path {
    fill: ${colors.secondary};
  }
`;
export const NullIcon = styled.div`
  width: ${spacing["sm-md"]};
  height: ${spacing["sm-md"]};
`;
export const StarIcon = styled(StarIconRaw)`
  ${applySquareSize};
  ${applySvgProps};

  /* ${(props) => css`
    ${applyCSSProperty(
      "width",
      props.$width || props.$height || spacing.md,
      spacing
    )};
    ${applyCSSProperty(
      "height",
      props.$height || props.$width || spacing.md,
      spacing
    )};

    & path {
      ${applyCSSProperty("fill", props.$fill, colors)};
    }
  `} */
`;
