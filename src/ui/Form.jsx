import styled from "styled-components";
import { spacing } from "../design-system";

/**
 * Form
 * A full-width vertical form layout with padding and spacing between fields.
 */
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
  width: 100%;
  padding: ${spacing.lg};
`;

export default Form;
