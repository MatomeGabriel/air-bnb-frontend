import { colors, flexRowBetween } from "../design-system";
import styled, { css } from "styled-components";
import { TextSm } from "./Paragraphs";
import BackButton from "./BackButton";
import { NullIcon } from "./Icons";

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

const FormHeader = ({ children, $showIcon = true }) => {
  // console.log("Show ICON", $showIcon);
  return (
    <StyledFormHeader>
      {$showIcon && <BackButton />}

      <TextSm $weight="bold">{children}</TextSm>
      {$showIcon && <NullIcon />}
    </StyledFormHeader>
  );
};

export default FormHeader;
