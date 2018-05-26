import React from 'react';
import renderer from 'react-test-renderer';

import PersonInput from '../src/component/PersonInput.js';

describe('<PersonInput />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<PersonInput />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });