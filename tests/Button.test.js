import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../src/component/Button.js';

describe('<Button />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<Button />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });