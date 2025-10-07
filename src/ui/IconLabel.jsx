import { FlexRow } from "./Flex";

/**
 * IconLabel
 * A horizontal layout wrapper for icons and labels.
 * Uses FlexRow with customizable gap and alignment.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Icon and label elements.
 * @param {string} [props.$gap="base"] - Spacing between items.
 * @param {string} [props.$align="center"] - Vertical alignment of items.
 * @returns {JSX.Element}
 */
export const IconLabel = ({ children, $gap = "base", $align = "center" }) => {
  return (
    <FlexRow $gap={$gap} $align={$align}>
      {children}
    </FlexRow>
  );
};
