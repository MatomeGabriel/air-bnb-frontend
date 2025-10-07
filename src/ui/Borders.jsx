import styled from "styled-components";
import { colors } from "../design-system";

/**
 * BorderSm
 * A full-width horizontal divider with standard border color.
 * Used to visually separate sections in the UI.
 *
 * @type {StyledComponent}
 */
export const BorderSm = styled.div`
  width: 100%;
  border: 1px solid ${colors.border};
`;
