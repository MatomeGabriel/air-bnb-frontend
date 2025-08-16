import styled from "styled-components";
import { FlexColumn } from "./Flex";
import {
  colors,
  flexRowStartCenter,
  spacing,
  typography,
} from "../design-system";

const StyledFormRow = styled(FlexColumn)`
  gap: ${spacing.sm};
  & input {
    padding: 2rem 1.2rem 0.8rem;
    height: 5.6rem;
  }

  /* input:valid + label */
  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: 1rem;
    transform: translateY(0);
    font-size: 1.2rem;
  }

  & label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1.2rem;
    font-size: ${typography.sizes.base};
    color: #717171;
    pointer-events: none;
    transition: all 0.2s ease;
  }
`;
const Message = styled.p`
  font-size: 1.2rem;
  color: #717171;
  margin-left: 2px;
`;
const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Error = styled.p`
  ${flexRowStartCenter}
  gap: ${spacing.xs};
  color: ${colors.error};
  font-weight: 500;
  font-size: 1.2rem;
  margin-left: 2px;
`;

const FormRow = ({ label, error, message, children }) => {
  return (
    <StyledFormRow>
      <InputContainer>
        {children}
        {label && <label htmlFor={children.props.id}>{label}</label>}
      </InputContainer>
      {error ? <Error>{error}</Error> : message && <Message>{message}</Message>}
    </StyledFormRow>
  );
};

export default FormRow;
