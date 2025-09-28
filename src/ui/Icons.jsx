/**
 * Icons module
 *
 * Provides styled React components for all SVG icons used throughout the app.
 * Each export is a styled version of an SVG asset, sized and themed according to the design system.
 *
 * Usage:
 *   import { WifiIcon, PoolIcon } from "../ui/Icons";
 *   <WifiIcon />
 *
 * Icons are grouped by purpose (amenities, UI, social, etc.) and can be used in any React component.
 */
import styled from "styled-components";
// import SearchIconRaw from "../assets/search.svg?react";
import { ReactComponent as SearchIconRaw } from "../assets/search.svg";

import { ReactComponent as HeartOutlineRaw } from "../assets/heart-outline.svg";
import { ReactComponent as ProfileOutlineRaw } from "../assets/profile-outline.svg";
import { ReactComponent as LogoIconRaw } from "../assets/logoText.svg";
import { ReactComponent as MenuIconRaw } from "../assets/Menu.svg";
import { ReactComponent as AvatarIconRaw } from "../assets/Avatar.svg";
import { ReactComponent as ChevLeftIconRaw } from "../assets/chevLeft.svg";
import { ReactComponent as StarIconRaw } from "../assets/star.svg";
import { ReactComponent as StarOutlineIconRaw } from "../assets/starOutline.svg";
import { ReactComponent as ShieldTickOutlineIconRaw } from "../assets/shieldTick.svg";
import { ReactComponent as SearchIconRawSm } from "../assets/searchSm.svg";
import { ReactComponent as BadgeIconRaw } from "../assets/badge.svg";
import { ReactComponent as ShareIconRaw } from "../assets/share.svg";
import { ReactComponent as HeartIconBoldRaw } from "../assets/heartBold.svg";
import { ReactComponent as ShowMoreIconRaw } from "../assets/showMore.svg";
import { ReactComponent as ProfileUploadIconRaw } from "../assets/ProfileUpload.svg";
import { ReactComponent as CloudUploadIconRaw } from "../assets/cloudUpload.svg";
import { ReactComponent as GlobeIconRaw } from "../assets/globe.svg";
import { ReactComponent as DatabaseFullIconRaw } from "../assets/databaseFull.svg";
import { ReactComponent as CloudSolidFullIconRaw } from "../assets/cloudSolidFull.svg";
import { ReactComponent as xMarkFullFullIconRaw } from "../assets/xMarkFull.svg";
import { ReactComponent as TrashCanRegularIconRaw } from "../assets/trashCanRegular.svg";
import { ReactComponent as WarningIconRaw } from "../assets/warning.svg";
import { ReactComponent as FrameIconRaw } from "../assets/Frame.svg";

import { ReactComponent as TwitterIconRaw } from "../assets/twitter.svg";
import { ReactComponent as InstagramIconRaw } from "../assets/instagram.svg";
import { ReactComponent as FacebookIconRaw } from "../assets/facebook.svg";
import { ReactComponent as SuperHostIconRaw } from "../assets/superHost.svg";

import { ReactComponent as HomeIconRaw } from "../assets/home.svg";
import { ReactComponent as SparklesIconRaw } from "../assets/sparkles.svg";
import { ReactComponent as CheckInIconRaw } from "../assets/checkIn.svg";
import { ReactComponent as CalenderIconRaw } from "../assets/calendar.svg";
import { ReactComponent as GardenIconRaw } from "../assets/garden.svg";
import { ReactComponent as DryerIconRaw } from "../assets/dryer.svg";
import { ReactComponent as KitchenIconRaw } from "../assets/kitchen.svg";
import { ReactComponent as PetsIconRaw } from "../assets/pets.svg";
import { ReactComponent as WifiIconRaw } from "../assets/wifi.svg";
import { ReactComponent as WasherIconRaw } from "../assets/washer.svg";
import { ReactComponent as SecurityCameraIconRaw } from "../assets/securityCamera.svg";
import { ReactComponent as RefrigeratorIconRaw } from "../assets/refrigerator.svg";
import { ReactComponent as BicyclesIconRaw } from "../assets/bicycles.svg";

import { ReactComponent as AirConditioningIconRaw } from "../assets/Air conditioning.svg";
import { ReactComponent as BBQGrillIconRaw } from "../assets/BBQ grill.svg";
import { ReactComponent as BeachAreaIconRaw } from "../assets/Beach area.svg";
import { ReactComponent as FireExtinguisherIconRaw } from "../assets/Fire extinguisher.svg";
import { ReactComponent as FireplaceIconRaw } from "../assets/Fireplace.svg";
import { ReactComponent as FirstAidKitIconRaw } from "../assets/First aid kit.svg";
import { ReactComponent as HotTubIconRaw } from "../assets/Hot tub.svg";
import { ReactComponent as LakeAreaIconRaw } from "../assets/Lake area.svg";
import { ReactComponent as OutdoorDiningIconRaw } from "../assets/Outdoor dining.svg";
import { ReactComponent as PaidParkingIconRaw } from "../assets/Paid parking.svg";
import { ReactComponent as ParkingIconRaw } from "../assets/Parking.svg";
import { ReactComponent as PatioIconRaw } from "../assets/Patio.svg";
import { ReactComponent as PianoIconRaw } from "../assets/Piano.svg";
import { ReactComponent as PoolTableIconRaw } from "../assets/Pool table.svg";
import { ReactComponent as PoolIconRaw } from "../assets/Pool.svg";
import { ReactComponent as ShowerIconRaw } from "../assets/Shower.svg";
import { ReactComponent as SkiIconRaw } from "../assets/Ski.svg";
import { ReactComponent as SmokeAlarmIconRaw } from "../assets/Smoke alarm.svg";
import { ReactComponent as TVIconRaw } from "../assets/TV.svg";
import { ReactComponent as UnionIconRaw } from "../assets/Union.svg";
import { ReactComponent as WorkspaceIconRaw } from "../assets/Workspace.svg";
import { ReactComponent as XCloseIconRaw } from "../assets/xClose.svg";
import { ReactComponent as GymIconRaw } from "../assets/Gym.svg";

import {
  applySquareSize,
  applySvgProps,
  colors,
  spacing,
} from "../design-system";

/**
 * Amenities
 *
 */
export const WifiIcon = styled(WifiIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const FrameIcon = styled(FrameIconRaw)`
  width: ${spacing["2xl"]};
  height: auto;
`;
export const SuperHostIcon = styled(SuperHostIconRaw)`
  width: 2.8rem;
  height: 2.8rem;
`;

export const AirConditioningIcon = styled(AirConditioningIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const BBQGrillIcon = styled(BBQGrillIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const BeachAreaIcon = styled(BeachAreaIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const FireExtinguisherIcon = styled(FireExtinguisherIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const FireplaceIcon = styled(FireplaceIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const FirstAidKitIcon = styled(FirstAidKitIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const HotTubIcon = styled(HotTubIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const LakeAreaIcon = styled(LakeAreaIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const OutdoorDiningIcon = styled(OutdoorDiningIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const PaidParkingIcon = styled(PaidParkingIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const ParkingIcon = styled(ParkingIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const PatioIcon = styled(PatioIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const PianoIcon = styled(PianoIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const PoolTableIcon = styled(PoolTableIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const PoolIcon = styled(PoolIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const ShowerIcon = styled(ShowerIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const SkiIcon = styled(SkiIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const SmokeAlarmIcon = styled(SmokeAlarmIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const TVIcon = styled(TVIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const UnionIcon = styled(UnionIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const WorkspaceIcon = styled(WorkspaceIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const XCloseIcon = styled(XCloseIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;

export const GymIcon = styled(GymIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const WasherIcon = styled(WasherIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const SecurityCameraIcon = styled(SecurityCameraIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const RefrigeratorIcon = styled(RefrigeratorIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const BicyclesIcon = styled(BicyclesIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const GardenIcon = styled(GardenIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const DryerIcon = styled(DryerIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const KitchenIcon = styled(KitchenIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const PetsIcon = styled(PetsIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;

export const HomeIcon = styled(HomeIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const SparklesIcon = styled(SparklesIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const CheckInIcon = styled(CheckInIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;
export const CalenderIcon = styled(CalenderIconRaw)`
  width: ${spacing.xl};
  height: ${spacing.xl};
`;

export const DatabaseFullIcon = styled(DatabaseFullIconRaw)`
  width: 2rem;
  height: 2rem;
  ${applySquareSize};
  ${applySvgProps};
`;

export const TwitterIcon = styled(TwitterIconRaw)`
  width: ${spacing.lg};
  height: ${spacing.lg};
`;
export const FacebookIcon = styled(FacebookIconRaw)`
  width: ${spacing.lg};
  height: ${spacing.lg};
`;
export const InstagramIcon = styled(InstagramIconRaw)`
  width: ${spacing.lg};
  height: ${spacing.lg};
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
  ${applySquareSize};
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
`;
export const StarOutlineIcon = styled(StarOutlineIconRaw)`
  ${applySquareSize};
  ${applySvgProps};
`;
export const ShieldTickOutlineIcon = styled(ShieldTickOutlineIconRaw)`
  ${applySquareSize};
  ${applySvgProps};
`;
