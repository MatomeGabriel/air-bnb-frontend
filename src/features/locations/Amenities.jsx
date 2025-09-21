import styled from "styled-components";
import DataDetail from "./DataDetail";
import {
  AirConditioningIcon,
  BicyclesIcon,
  DryerIcon,
  GardenIcon,
  KitchenIcon,
  PetsIcon,
  RefrigeratorIcon,
  SecurityCameraIcon,
  WasherIcon,
  WifiIcon,
} from "../../ui/Icons";
import { useState } from "react";
import { generateResponsiveStyles, spacing } from "../../design-system";
import { FlexColumn } from "../../ui/Flex";
import { ButtonOutlineDarkMdFull, ButtonOutlineDarkSm } from "../../ui/Buttons";
import { amenityIcons } from "../../utils/amenityIcons";

const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${generateResponsiveStyles("grid-template-columns", { sm: "1fr 1fr" })}
  width: 100%;
  gap: ${spacing.base};
`;

const dataDetail = [
  { icon: <GardenIcon />, heading: "Garden View" },
  { icon: <KitchenIcon />, heading: "Kitchen" },
  { icon: <WifiIcon />, heading: "Wifi" },
  { icon: <PetsIcon />, heading: "Pets Allowed" },
  { icon: <WasherIcon />, heading: "Free washer - in building" },
  { icon: <DryerIcon />, heading: "Dryer" },
  { icon: <AirConditioningIcon />, heading: "Central air conditioning" },
  { icon: <SecurityCameraIcon />, heading: "Security cameras on property" },
  { icon: <RefrigeratorIcon />, heading: "Security cameras on property" },
  { icon: <BicyclesIcon />, heading: "Bicycles" },
];
const Amenities = ({ amenitiesRef, amenities = [] }) => {
  const [showMore, setShowMore] = useState(6);

  const onShowMore = () => {
    // setShowMore(() => dataDetail.length);
    setShowMore(() => amenities.length);
  };

  // limit the info to show and slice it to show more
  // when we click showmore the derivedDataDetail will be the full array
  // otherwise it will be the sliced array
  const derivedDataDetail = amenities.slice(0, showMore);
  return (
    <FlexColumn $gap="xl" $width="100%" ref={amenitiesRef}>
      <AmenitiesGrid>
        {derivedDataDetail.map((amenity, i) => {
          // get the icon component for each amenity
          const IconComponent = amenityIcons[amenity];

          if (!IconComponent) {
            console.warn(`No icon found for amenity: ${amenity}`);
          }
          const data = {
            // if icon exists render it, otherwise null
            icon: IconComponent ? <IconComponent /> : null,
            heading: amenity.replace(/_/g, " "),
          };
          return <DataDetail key={i} data={data} $type="amenities" />;
        })}
      </AmenitiesGrid>
      {showMore < amenities.length && (
        <ButtonOutlineDarkSm onClick={onShowMore}>
          Show all {amenities.length} amenities
        </ButtonOutlineDarkSm>
      )}
    </FlexColumn>
  );
};

export default Amenities;
