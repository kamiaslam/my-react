import React from 'react';
import renderer from 'react-test-renderer';

import Calc from '../src/component/Calc.js';

describe('<Calc />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<Calc />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });