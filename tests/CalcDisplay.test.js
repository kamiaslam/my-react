import React from 'react';
import renderer from 'react-test-renderer';

import CalcDisplay from '../src/component/CalcDisplay.js';

describe('<CalcDisplay />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<CalcDisplay />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });