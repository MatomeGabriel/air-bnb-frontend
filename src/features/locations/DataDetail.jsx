import { FlexColumn, FlexRow } from "../../ui/Flex";
import { HomeIcon } from "../../ui/Icons";
import { TextBase, TextSm } from "../../ui/Paragraphs";

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
