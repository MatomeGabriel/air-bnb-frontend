import styled from "styled-components";
import { spacing } from "../design-system";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
  width: 100%;
  padding: ${spacing.lg};
`;

export default Form;
