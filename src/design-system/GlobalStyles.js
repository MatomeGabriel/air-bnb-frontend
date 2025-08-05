import { createGlobalStyle } from "styled-components";
import { colors, typography } from "./index";

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
    background-color: #222;
}
input, 
button, 
textarea, 
select {
    font: inherit;
    color: inherit;
}

button {
    cursor: pointer;
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

.active {
    color: ${colors.primary}!important;
    font-weight: ${typography.weights.medium}!important;
    & svg path {
        fill: ${colors.primary}!important;
    }

}
`;

export default GlobalStyles;
