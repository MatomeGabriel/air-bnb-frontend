import { breakpoints } from "../tokens/breakpoints";

export const generateResponsiveStyles = (cssProp, values) => {
  // value = {sm: 'val', md: 'val'}
  const styles = {};
  Object.entries(values).forEach(([query, cssVal]) => {
    styles[`@media(min-width: ${breakpoints[query]})`] = {
      [cssProp]: cssVal,
    };
  });

  //
  return styles;
};
