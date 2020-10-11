import * as React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Components', () => {
  describe('Card', () => {
    test('snapshot renders', () => {
      const component = renderer.create(
        <Card title='Test title' imageUrl='http://image.url.com' />
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('Components', () => {
  describe('Card', () => {
    it('should render title without throwing an error', function () {
      const wrap = mount(
        <Card title='Test title' imageUrl='http://image.url.com'></Card>
      );
      expect(wrap.find('.cardTitle').text()).toBe('Test title');
    });
  });
});

describe('Components', () => {
  describe('Card', () => {
    it('should render image without throwing an error', function () {
      const wrap = mount(
        <Card title='Test title' imageUrl='http://image.url.com'></Card>
      );
      expect(wrap.find('img').prop('src')).toBe('http://image.url.com');
    });
  });
});

describe('Components', () => {
  describe('Card', () => {
    it('Test Card click event', () => {
      const mockCallBack = jest.fn();

      const card = shallow(<Card onClick={mockCallBack}>Ok!</Card>);
      card.find('.cardContainer').simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });
});
