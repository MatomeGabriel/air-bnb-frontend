import styled from "styled-components";
import { FlexColumn } from "./Flex";
import {
  colors,
  flexRowStartCenter,
  spacing,
  typography,
} from "../design-system";

/**
 * StyledFormRow
 * A vertical form field wrapper with spacing and floating label behavior.
 */
const StyledFormRow = styled(FlexColumn)`
  gap: ${spacing.sm};
  & input,
  & select {
    padding: 2rem 1.2rem 0.8rem;
    height: 5.6rem;
  }

  /* input:valid + label */
  input:focus + label,
  input:not(:placeholder-shown) + label,
  select:focus + label,
  select:not(:placeholder-shown) + label {
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

/**
 * Message
 * Displays helper or success text below the input.
 */
const Message = styled.p`
  font-size: 1.2rem;
  color: #717171;
  margin-left: 2px;
`;
/**
 * InputContainer
 * Wraps input/select and label for positioning.
 */
const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

/**
 * Error
 * Displays error message with styling and spacing.
 */
const Error = styled.p`
  ${flexRowStartCenter}
  gap: ${spacing.xs};
  color: ${colors.error};
  font-weight: 500;
  font-size: 1.2rem;
  margin-left: 2px;
`;

/**
 * FormRow
 * Combines input/select, floating label, and optional message or error.
 *
 * @param {Object} props
 * @param {string} props.label - Label text for the input/select.
 * @param {string} [props.error] - Optional error message.
 * @param {string} [props.message] - Optional helper message.
 * @param {React.ReactNode} props.children - Input or select element.
 * @param {string} [props.$width] - Optional width styling.
 * @returns {JSX.Element}
 */
const FormRow = ({ label, error, message, children, $width }) => {
  return (
    <StyledFormRow $width={$width}>
      <InputContainer>
        {children}
        {label && <label htmlFor={children.props.id}>{label}</label>}
      </InputContainer>
      {error ? <Error>{error}</Error> : message && <Message>{message}</Message>}
    </StyledFormRow>
  );
};

export default FormRow;
