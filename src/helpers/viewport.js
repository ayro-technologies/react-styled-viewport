export default sizes => ({
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
  }
});
