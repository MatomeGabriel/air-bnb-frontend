import styled from "styled-components";
import { generateResponsiveStyles, maxContainer } from "../design-system";

export const MainContainer = styled.main`
  ${maxContainer}
  width: 100%;
  margin: 0 auto;
  padding: 4.8rem 2.4rem;
  ${generateResponsiveStyles("padding", {
    md: "6.4rem 4.8rem",
    lg: "9.6rem 8rem;",
  })}
`;
