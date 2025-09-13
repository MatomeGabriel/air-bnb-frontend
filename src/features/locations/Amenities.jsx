import styled from "styled-components";
import DataDetail from "./DataDetail";
import {
  AirConditionIcon,
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
  { icon: <AirConditionIcon />, heading: "Central air conditioning" },
  { icon: <SecurityCameraIcon />, heading: "Security cameras on property" },
  { icon: <RefrigeratorIcon />, heading: "Security cameras on property" },
  { icon: <BicyclesIcon />, heading: "Bicycles" },
];
const Amenities = ({ amenitiesRef }) => {
  const [showMore, setShowMore] = useState(4);

  const onShowMore = () => {
    setShowMore(() => dataDetail.length);
  };

  const derivedDataDetail = dataDetail.slice(0, showMore);
  return (
    <FlexColumn $gap="xl" $width="100%" ref={amenitiesRef}>
      <AmenitiesGrid>
        {derivedDataDetail.map((data, i) => (
          <DataDetail key={i} data={data} $type="amenities" />
        ))}
      </AmenitiesGrid>
      {showMore < dataDetail.length && (
        <ButtonOutlineDarkSm onClick={onShowMore}>
          Show all 37 amenities
        </ButtonOutlineDarkSm>
      )}
    </FlexColumn>
  );
};

export default Amenities;
