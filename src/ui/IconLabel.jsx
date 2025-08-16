import { FlexRow } from "./Flex";

export const IconLabel = ({ children, $gap = "base", $align = "center" }) => {
  return (
    <FlexRow $gap={$gap} $align={$align}>
      {children}
    </FlexRow>
  );
};
