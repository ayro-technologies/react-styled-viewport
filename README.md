# NPM Module Boilerplate

[![Build Status](https://travis-ci.org/flexdinesh/npm-module-boilerplate.svg?branch=master)](https://travis-ci.org/flexdinesh/npm-module-boilerplate) [![dependencies Status](https://david-dm.org/flexdinesh/npm-module-boilerplate/status.svg)](https://david-dm.org/flexdinesh/npm-module-boilerplate) [![devDependencies Status](https://david-dm.org/flexdinesh/npm-module-boilerplate/dev-status.svg)](https://david-dm.org/flexdinesh/npm-module-boilerplate?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Start developing your NPM module in seconds** ✨

Readymade boilerplate setup with all the best practices to kick start your npm/node module development.

Happy hacking =)

# Features

* **Define own breakpoints**
* **Use it in your styled components**:
    * Via Helper:
    * Via Higher Order Component's props:
* **End to End Example**:

```
import React, { Component } from 'react';
import { withViewport, viewport } from '@ayro-technologies/react-styled-viewport';

const breakpoints = {
    mobile: 450,
    tablet: 768,
    desktop: 1020,
    largeDesktop: 1600
};

const media = viewport(breakpoints).styled();

const ResponsiveButton = styled.button`
${media.largeDesktop`font-size:60px;`}
${media.desktop`font-size:40px;`}
${media.tablet`font-size:20px;`}
${media.mobile`font-size:10px;`}

${media.lessThan(500)`background-color: blue;`}
${media.greaterThan(700)`background-color: red;`}
${media.between(500, 700)`background-color: green;`}
`;

class Example extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={{fontSize: this.props.viewport.isMobile() ? '16px': '30px' }}>Hello world</h1>
        {this.props.viewport.match(455) && <button>Only on 455 pixels</button>}
        {this.props.viewport.between(500, 800) && <button>Between 500 and 800 pixels</button>}
        {this.props.viewport.lessThan(800) && <button>Less than 800 px</button>}
        {this.props.viewport.greaterThan(800) && <button>Greater than 800 px</button>}
        <ResponsiveButton>Responsive via styled helper</ResponsiveButton>
      </React.Fragment>
    )
  }
}

export default withViewport(Example, breakpoints);
```

# Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests with linting and coverage results.
- `npm test:only` - Run tests without linting or coverage.
- `npm test:watch` - You can even re-run tests on file changes!
- `npm test:prod` - Run tests with minified code.
- `npm run test:examples` - Test written examples on pure JS for better understanding module usage.
- `npm run lint` - Run ESlint with airbnb-config
- `npm run cover` - Get coverage report for your code.
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.

# Installation

1. Install the package:
```npm i @ayro-technologies/react-styled-viewport --save```

2. Import the dependencies:
```import { withViewport, viewport } from '@ayro-technologies/react-styled-viewport';```

3. Define your breakpoints:

```
const breakpoints = {
    mobile: 450,
    tablet: 768,
    desktop: 1020,
    largeDesktop: 1600
};
```
4. Use it for your Styled Components via the helper or via HoC (passing in custom breakpoints):
    * Styled Components helper: `const media = viewport(breakpoints).styled();`
    * HoC: `export default withViewport(YourComponent, breakpoints);`

# License

MIT © Cristian Eriomenco
