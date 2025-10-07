import { colors, flexRowBetween } from "../design-system";
import styled, { css } from "styled-components";
import { TextSm } from "./Paragraphs";
import BackButton from "./BackButton";
import { NullIcon } from "./Icons";

/**
 * StyledFormHeader
 * A horizontal header layout with padding and bottom border.
 * Centers content if `$showIcon` is false.
 */
const StyledFormHeader = styled.div`
  ${flexRowBetween}

  ${({ $showIcon }) =>
    $showIcon &&
    css`
      justify-content: center;
    `}
  
  padding: 2rem 2.4rem;
  border-bottom: 1px solid ${colors.border};
`;

/**
 * FormHeader
 * Displays a form header with optional back and null icons.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Header text or content.
 * @param {boolean} [props.$showIcon=true] - Whether to show icons on both sides.
 * @returns {JSX.Element}
 */

const FormHeader = ({ children, $showIcon = true }) => {
  return (
    <StyledFormHeader $showIcon={!$showIcon}>
      {$showIcon && <BackButton />}

      <TextSm $weight="bold">{children}</TextSm>
      {$showIcon && <NullIcon />}
    </StyledFormHeader>
  );
};

export default FormHeader;
