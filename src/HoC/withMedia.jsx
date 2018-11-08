import React, { Component } from "react";
import * as defaults from "../MediaQuery/MediaQuery.defaults";
import MediaQuery from '../MediaQuery/MediaQuery';

export default (WrappedComponent, sizes = defaults.sizes) => {
  return class MediaComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        width: window.outerWidth
      };

      this.mediaQuery = new MediaQuery(sizes);
    }

    componentDidMount() {
      window.addEventListener("resize", () => {
        const newRange = this.mediaQuery.matchDevice(window.outerWidth);
        const prevRange = this.mediaQuery.matchDevice(this.state.width);

        if (newRange != prevRange) {
          this.setState({
            width: window.outerWidth
          });
        }
      });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          viewport={this.mediaQuery.viewport()}
        />
      );
    }
  };
};
