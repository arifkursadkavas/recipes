import * as React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Components', () => {
  describe('Header', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<Header />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('Components', () => {
  describe('Header', () => {
    it('should render header text without throwing an error', function () {
      const wrap = mount(<Header />);
      expect(wrap.find('span').text()).toBe('Marley Spoon');
    });
  });
});

describe('Components', () => {
  describe('Header', () => {
    it('should render logo image with src correctly', () => {
      const wrap = mount(<Header />);
      expect(wrap.find('img').prop('src')).toEqual('../favicon-96x96.png');
    });
  });
});
