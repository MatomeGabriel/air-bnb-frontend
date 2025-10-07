/**
 * GlobalStyles
 *
 * Injects global CSS resets and base styles using styled-components.
 * Establishes consistent typography, spacing, form element behavior, and responsive adjustments.
 *
 * Features:
 * - Box-sizing reset and margin/padding normalization
 * - Base font sizing (62.5% for rem scaling)
 * - Responsive body padding
 * - Unified styling for inputs, buttons, selects, and textareas
 * - Focus and disabled states for form elements
 * - Break-word and hyphenation for all text elements
 * - Responsive visibility for `.active` links and embedded SVGs
 *
 * Usage:
 *   <GlobalStyles />
 *
 * @returns {StyledComponent} Global style injection
 */

import { createGlobalStyle } from "styled-components";
import {
  boxShadow,
  colors,
  generateResponsiveStyles,
  spacing,
  typography,
} from "./index";

const GlobalStyles = createGlobalStyle`
*, 
*::before,
*::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html {
   font-size: 62.5%;
}

body {
    font-family: ${typography.fontFamily};
    font-size: ${typography.sizes.base};
    list-style: ${typography.lineHeights.normal};
    padding-bottom: ${spacing["2xl"]};
    ${generateResponsiveStyles("padding-bottom", { md: 0 })};
}
input, 
button, 
textarea, 
select {
    font: inherit;
    color: inherit;
}

input, select, textarea {
    width: 100%;
    background: none;
    border-radius: ${spacing.sm};
    font-size: 1.4rem;
    line-height: 1.2;
    border: 1px solid ${colors.darkBorder};
    height: 4.2rem;
    padding: 0.8rem 1.2rem;
    transition: all  0.2s ease;

    &:focus {
      outline: none;
      box-shadow: ${boxShadow.sm};
      border: 1px solid transparent;
      outline: 2px solid #222;
    }
    

}
textarea {
    height: 10rem;
}

button {
    cursor: pointer;
}
input, select, textarea, button {
    &:disabled {
        background-color: ${colors.surface}; 
        color: ${colors.darkBorder}; 
        cursor: not-allowed;
    }
}

ul {
    list-style: none;
}

/* ensures our text breaks */
p, 
h1, 
h2,
h3,
h4,
h5,
h6{
    overflow-wrap: break-word;
    hyphens: auto;
}

img {max-width: 100%}

a.active {
    color: ${colors.primary};
    font-weight: ${typography.weights.medium};
    & svg path {
        fill: ${colors.primary};
    }

}

`;

export default GlobalStyles;
