import styledMedia from "../functions/styledMedia.js";
import * as defaults from "../defaults.js";

export default (customSizes = defaults.sizes) => {

  const sizes = { ...customSizes, ...defaults.ranges };
  const sortedSizes = Object.entries(sizes).sort((a, b) => (sizes[a] - sizes[b]));
  
  return ({
    isMobile: () => {
      return window.outerWidth <= sizes.mobile;
    },
    isTablet: () => {
      return (
        window.outerWidth > sizes.mobile && window.outerWidth <= sizes.tablet
      );
    },
    isDesktop: () => {
      return (
        window.outerWidth > sizes.tablet && window.outerWidth <= sizes.desktop
      );
    },
    isLargeDesktop: () => {
      return window.outerWidth > sizes.desktop;
    },
    equals: size => {
      return window.outerWidth === size;
    },
    lessThan: size => {
      return window.outerWidth < size;
    },
    higherThan: size => {
      return window.outerWidth > size;
    },
    between: (min, max) => {
      return min < window.outerWidth < max;
    },
    match: (currentSize) => {
      for (var [key, value] of sortedSizes) {
        if (currentSize <= value) {
          return key;
        }
      }
    },
    styled: () => {
      return styledMedia(sizes);
    }
  });
};
