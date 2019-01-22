import { assert } from 'chai';
import {viewport, withViewport} from '../src/index.js';

describe('Imports test', () => {
  it('should import viewport', () => {
    assert(typeof viewport === 'function');
  });

  it('should import withViewport', () => {
    assert(typeof withViewport === 'function');
  });

  it('should match custom viewports', () => {
    const breakpoints = {
      mobile: 300,
      tablet: 500,
      desktop: 700,
      largeDesktop: 900
    };

    for(var [key, value] of Object.entries(breakpoints)){
      global.window = {
        innerWidth: value
      };
      assert(viewport(breakpoints).match(value) === key);
    }
  });
});
