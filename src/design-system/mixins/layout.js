/**
 * Layout and Utility Styles
 *
 * A collection of reusable CSS snippets for flexbox layouts, containers, backgrounds, and headings.
 * These tokens are designed to streamline consistent layout behavior across components.
 *
 * Flexbox Layouts:
 * - `Row`: Basic horizontal flex container
 * - `column`: Basic vertical flex container
 * - `flexRowCenter`: Centered row (horizontal and vertical)
 * - `flexRowStartCenter`: Row aligned left, vertically centered
 * - `flexRowBetween`: Row with space-between and vertical centering
 * - `flexColumnCenter`: Column centered both horizontally and vertically
 * - `flexColumnStart`: Column aligned left, vertically centered
 * - `flexColumnCenterStart`: Column centered vertically, aligned left
 * - `flexColumnCenterEnd`: Column centered vertically, aligned right
 * - `flexColumnStartCenter`: Column aligned top, horizontally centered
 * - `flexColumnEndCenter`: Column aligned bottom, horizontally centered
 *
 * Containers and Utilities:
 * - `maxContainer`: Sets a max-width of 144rem for layout boundaries
 * - `backgroundCover`: Applies full-cover background image with bottom alignment
 * - `headingBase`: Base heading style with tight line height, medium weight, and gray color
 *
 * @example
 * const Wrapper = styled.div`
 *   ${flexColumnCenter}
 *   ${maxContainer}
 * `;
 */

import { css } from "styled-components";
import { colors } from "../tokens/colors";

export const Row = css`
  display: flex;
`;

export const column = css`
  display: flex;
  flex-direction: column;
`;

export const flexRowCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexRowStartCenter = css`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const flexRowBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// justify and align center
export const flexColumnCenter = css`
  ${column}
  justify-content: center;
  align-items: center;
`;

export const flexColumnStart = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const flexColumnCenterStart = css`
  ${column}
  justify-content: center;
  align-items: start;
`;

export const flexColumnCenterEnd = css`
  ${column}
  justify-content: center;
  align-items: end;
`;
export const flexColumnStartCenter = css`
  ${column}
  justify-content: start;
  align-items: center;
`;

export const flexColumnEndCenter = css`
  ${column}
  justify-content: end;
  align-items: center;
`;

export const maxContainer = css`
  max-width: 144rem;
`;

export const backgroundCover = css`
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const headingBase = css`
  line-height: 1.2;
  font-weight: 500;
  text-align: start;
  color: ${colors["gray-700"]};
`;
