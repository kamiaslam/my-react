import React from 'react';
import renderer from 'react-test-renderer';

import PeopleList from '../src/component/PeopleList.js';

describe('<PeopleList />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<PeopleList />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });