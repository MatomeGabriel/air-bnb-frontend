import { FlexColumn, FlexRow } from "../../ui/Flex";
import { HomeIcon } from "../../ui/Icons";
import { TextBase, TextSm } from "../../ui/Paragraphs";

/**
 * DataDetail
 *
 * Renders a horizontal row of icon and text details, commonly used for listing metadata or amenities.
 * Adjusts alignment and text weight based on `$type` prop.
 *
 * @param {Object} props
 * @param {Object} props.data - Data object containing display content
 * @param {JSX.Element} props.data.icon - Icon component to display
 * @param {string} props.data.heading - Main heading text
 * @param {string} [props.data.subHeading] - Optional subheading text
 * @param {string} [props.data.$align="start"] - Optional alignment override
 * @param {string|null} [props.$type=null] - Optional type context (e.g. "amenities") to adjust layout
 *
 * @returns {JSX.Element} A styled row of icon and text
 *
 * @example
 * <DataDetail
 *   $type="amenities"
 *   data={{
 *     icon: <HomeIcon />,
 *     heading: "Private Entrance",
 *     subHeading: "Guests can access the unit directly",
 *   }}
 * />
 */
const DataDetail = ({ data = {}, $type = null }) => {
  const { icon, heading, subHeading, $align = "start" } = data;
  return (
    <FlexRow $gap="base" $align={$type === "amenities" ? "center" : $align}>
      {icon}
      <FlexColumn>
        <TextBase $weight={$type !== "amenities" && "medium"}>
          {heading}
        </TextBase>
        {subHeading && <TextSm $color="gray-500">{subHeading}</TextSm>}
      </FlexColumn>
    </FlexRow>
  );
};

export default DataDetail;
