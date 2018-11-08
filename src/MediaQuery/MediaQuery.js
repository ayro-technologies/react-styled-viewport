import { Object } from "es6-shim";
import viewport from "../helpers/viewport";
import styledMedia from "../helpers/styledMedia";
import * as defaults from "./MediaQuery.defaults";

class MediaQuery {
  constructor(sizes = defaults.sizes) {
    this.sizes = { ...sizes, ...defaults.ranges };
  }

  viewport() {
    return viewport(this.sizes);
  }

  matchDevice(size) {
    let sortedSizes = Object.entries(this.sizes).sort((a, b) => {
      return this.sizes[a] - this.sizes[b];
    });

    for (var [key, value] of sortedSizes) {
      if (size < value) {
        return key;
      }
    }
  }

  getMedia() {
    return styledMedia(this.sizes);
  }
}

export default MediaQuery;
