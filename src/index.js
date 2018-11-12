import viewport from "./Viewport/viewport";
import withViewport from "./Viewport/withViewport.jsx";

export { viewport, withViewport };

import React, { Component } from 'react'
import {withViewport} from '@ayro-technologies/react-styled-viewport';

class AwesomeThing extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={{fontSize: this.props.viewport.isMobile() ? '16px': '30px' }}>Hello world</h1>
        {this.props.viewport.match(455) && <button>Only on 455 pixels</button>}
        {this.props.viewport.between(500, 800) && <button>Between 500 and 800 pixels</button>}
        {this.props.viewport.lessThan(800) && <button>Less than 800 px</button>}
        {this.props.viewport.greaterThan(800) && <button>Greater than 800 px</button>}
      </React.Fragment>
    )
  }
}

export default withViewport(AwesomeThing, {
    mobile: 450,
    tablet: 768,
    desktop: 1020,
    largeDesktop: 1600
});