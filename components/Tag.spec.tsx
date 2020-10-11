import * as React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Tag from './Tag';

describe('Components', () => {
  describe('Tag', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<Tag text="Tag Text" />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('Components', () => {
  describe('Tag', () => {
    it('should render Tag text without throwing an error', function () {
      const wrap = mount(<Tag text="Tag Text" />);
      expect(wrap.find('.tagText').text()).toBe('Tag Text');
    });
  });
});
