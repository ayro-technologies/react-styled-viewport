import styledMedia from "../functions/styledMedia.js";
import * as defaults from "../defaults.js";

export default (customSizes = defaults.sizes) => {

  const sizes = { ...customSizes, ...defaults.ranges };
  const sortedSizes = Object.entries(sizes).sort((a, b) => (sizes[a] - sizes[b]));
  
  return ({
    isMobile: () => {
      return window.innerWidth <= sizes.mobile;
    },
    isTablet: () => {
      return (
        window.innerWidth > sizes.mobile && window.innerWidth <= sizes.tablet
      );
    },
    isDesktop: () => {
      return (
        window.innerWidth > sizes.tablet && window.innerWidth <= sizes.desktop
      );
    },
    isLargeDesktop: () => {
      return window.innerWidth > sizes.desktop;
    },
    equals: size => {
      return window.innerWidth === size;
    },
    lessThan: size => {
      return window.innerWidth < size;
    },
    higherThan: size => {
      return window.innerWidth > size;
    },
    between: (min, max) => {
      return min < window.innerWidth < max;
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
