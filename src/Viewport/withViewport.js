import React, { Component } from "react";

import viewport from './viewport.js';

export default (WrappedComponent, sizes) => {
  return class MediaComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        width: window.outerWidth
      };
      
      this.viewport = viewport(sizes);
    }

    componentDidMount() {
      this.listener = window.addEventListener("resize", this.onResize);
    }

    componentWillMount(){
      window.removeEventListener("resize", this.onResize);
    }

    onResize = () => {
        const newRange = this.viewport.match(window.outerWidth);
        const prevRange = this.viewport.match(this.state.width);

        if (newRange != prevRange) {
          this.setState({
            width: window.outerWidth
          });
        }
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          viewport={this.viewport}
        />
      );
    }
  };
};
