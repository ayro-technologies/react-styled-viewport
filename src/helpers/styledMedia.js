import { css } from "styled-components";
import { ranges } from "../MediaQuery/MediaQuery.defaults";

export default sizes => {
  const keys = Object.keys(sizes);

  const firstIndex = 0;
  const lastIndex =
    keys.filter(key => !Object.keys(ranges).includes(key)).length - 1;

  return keys.reduce((acc, label, index) => {
    let min = getPrevSize(sizes, firstIndex, index);
    let max = getCurrentSize(sizes, lastIndex, index);

    let query;
    switch (index) {
      case firstIndex:
        query = `@media (max-width: ${max / 16}em)`;
        break;
      case lastIndex:
        query = `@media (min-width: ${(min + 1) / 16}em)`;
        break;
      default:
        query = `@media (min-width: ${(min + 1) / 16}em) and (max-width: ${max /
          16}em)`;
        break;
    }

    switch (label) {
      case "lessThan":
        acc[label] = size => {
          query = `@media (max-width: ${size / 16}em)`;
          return mediaCssParser(query);
        };
        break;
      case "greaterThan":
        acc[label] = size => {
          query = `@media (min-width: ${size / 16}em)`;
          return mediaCssParser(query);
        };
        break;
      case "between":
        acc[label] = (min, max) => {
          query = `@media (min-width: ${min / 16}em) and (max-width: ${max /
            16}em)`;
          return mediaCssParser(query);
        };
        break;
      default:
        acc[label] = mediaCssParser(query);
        break;
    }

    return acc;
  }, {});
};

const getPrevSize = (sizes, firstIndex, index) => {
  const keys = Object.keys(sizes);
  let key = keys[index - 1];
  if (index === firstIndex) {
    return 0;
  }
  return sizes[key];
};

const getCurrentSize = (sizes, lastIndex, index) => {
  const keys = Object.keys(sizes);
  let key = keys[index];
  if (index == lastIndex) {
    return undefined;
  }
  return sizes[key];
};

const mediaCssParser = query => (...args) => css`
  ${query} {
    ${css(...args)};
  }
`;
