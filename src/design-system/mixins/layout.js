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
