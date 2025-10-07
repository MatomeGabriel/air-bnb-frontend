import styled from "styled-components";
import { typography } from "../../design-system";
const StyledDescription = styled.div`
  white-space: pre-wrap;
  line-height: ${typography.lineHeights.relaxed};
`;

/**
 * Description
 *
 * Renders a block of descriptive text with relaxed line spacing and preserved whitespace.
 * Useful for displaying multi-line content such as listing descriptions, bios, or notes.
 *
 * @param {Object} props
 * @param {string} props.text - The text content to display
 *
 * @returns {JSX.Element} Styled description block
 *
 * @example
 * <Description text="Welcome to our cozy villa.\nEnjoy the mountain view!" />
 */
const Description = ({ text }) => {
  //   const [showMore, setShowMore] = useState(false);
  return <StyledDescription>{text}</StyledDescription>;
};

export default Description;
