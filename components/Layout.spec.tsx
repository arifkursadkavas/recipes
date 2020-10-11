import * as React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Layout from './Layout';

describe('Components', () => {
  describe('Layout', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<Layout />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
