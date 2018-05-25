import React from 'react';
import renderer from 'react-test-renderer';

import CalcButtons from '../src/component/CalcButtons.js';

describe('<CalcButtons />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<CalcButtons />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });