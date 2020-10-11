import * as React from 'react';
import renderer from 'react-test-renderer';
import Layout from './Layout';

describe('Components', () => {
  describe('Layout', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<Layout />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
