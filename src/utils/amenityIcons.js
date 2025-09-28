/**
 * Imports all amenity icon components
 * Each icon is a React component representing a specific amenity visually.
 */
import {
  AirConditioningIcon,
  BBQGrillIcon,
  BeachAreaIcon,
  BicyclesIcon,
  DryerIcon,
  FireExtinguisherIcon,
  FireplaceIcon,
  FirstAidKitIcon,
  GardenIcon,
  GymIcon,
  HotTubIcon,
  OutdoorDiningIcon,
  PaidParkingIcon,
  ParkingIcon,
  PatioIcon,
  PetsIcon,
  PianoIcon,
  PoolIcon,
  PoolTableIcon,
  SecurityCameraIcon,
  ShowerIcon,
  SkiIcon,
  SmokeAlarmIcon,
  TVIcon,
  WasherIcon,
  WifiIcon,
  WorkspaceIcon,
} from "../ui/Icons";

/**
 * Maps amenity string keys to their corresponding React icon components.
 *
 * Usage:
 *   amenityIcons["wifi"] // returns WifiIcon component
 *   amenityIcons[amenityKey] // returns the icon for a given amenity key
 *
 * This mapping allows dynamic rendering of amenity icons in UI components.
 */
export const amenityIcons = {
  wifi: WifiIcon,
  pool: PoolIcon,
  parking: ParkingIcon,
  gym: GymIcon,
  central_air_conditioning: AirConditioningIcon,
  pet_friendly: PetsIcon,
  tv: TVIcon,
  braai: BBQGrillIcon,
  security_cameras_on_property: SecurityCameraIcon,
  workspace: WorkspaceIcon,
  garden_view: GardenIcon,
  washing_machine: WasherIcon,
  dryer: DryerIcon,
  bicycles: BicyclesIcon,
  hot_tub: HotTubIcon,
  patio: PatioIcon,
  outdoor_dining: OutdoorDiningIcon,
  fireplace: FireplaceIcon,
  pool_table: PoolTableIcon,
  piano: PianoIcon,
  paid_parking: PaidParkingIcon,
  beach_area: BeachAreaIcon,
  ski: SkiIcon,
  shower: ShowerIcon,
  smoke_alarm: SmokeAlarmIcon,
  first_aid_kit: FirstAidKitIcon,
  fire_extinguisher: FireExtinguisherIcon,
};
