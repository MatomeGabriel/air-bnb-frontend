import styled from "styled-components";
import { typography } from "../../design-system";
const StyledDescription = styled.div`
  white-space: pre-wrap;
  line-height: ${typography.lineHeights.relaxed};
`;

const Description = ({ text }) => {
  //   const [showMore, setShowMore] = useState(false);
  return <StyledDescription>{text}</StyledDescription>;
};

export default Description;
