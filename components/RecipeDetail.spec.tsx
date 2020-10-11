import * as React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import RecipeDetail from './RecipeDetail';

describe('Components', () => {
  describe('RecipeDetail', () => {
    test('snapshot renders', () => {
      const component = renderer.create(
        <RecipeDetail
          title="Title"
          imageUrl="ImageUrl"
          chef="ChefName"
          description="Description"
          tags={[{ name: 'tag1' }, { name: 'tag2' }]}
        />
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('Components', () => {
  describe('RecipeDetail', () => {
    it('should render title without throwing an error', function () {
      const wrap = mount(
        <RecipeDetail
          title="Title"
          imageUrl="ImageUrl"
          chef="ChefName"
          description="Description"
          tags={[{ name: 'tag1' }, { name: 'tag2' }]}
        />
      );
      expect(wrap.find('.recipeTitle').text()).toBe('Title');
    });
  });
});

describe('Components', () => {
  describe('RecipeDetail', () => {
    it('should render description without throwing an error', function () {
      const wrap = mount(
        <RecipeDetail
          title="Title"
          imageUrl="ImageUrl"
          chef="ChefName"
          description="Description"
          tags={[{ name: 'tag1' }, { name: 'tag2' }]}
        />
      );
      expect(wrap.find('.recipeDescription').text()).toBe('Description');
    });
  });
});

describe('Components', () => {
  describe('RecipeDetail', () => {
    it('should render imageUrl without throwing an error', function () {
      const wrap = mount(
        <RecipeDetail
          title="Title"
          imageUrl="ImageUrl"
          chef="ChefName"
          description="Description"
          tags={[{ name: 'tag1' }, { name: 'tag2' }]}
        />
      );
      expect(wrap.find('.recipeImage').prop('src')).toBe('ImageUrl');
    });
  });
});

describe('Components', () => {
  describe('RecipeDetail', () => {
    it('should render chef name without throwing an error', function () {
      const wrap = mount(
        <RecipeDetail
          title="Title"
          imageUrl="ImageUrl"
          chef="ChefName"
          description="Description"
          tags={[{ name: 'tag1' }, { name: 'tag2' }]}
        />
      );
      expect(wrap.find('.recipeChef').text()).toBe('Chef ChefName');
    });
  });
});

describe('Components', () => {
  describe('RecipeDetail', () => {
    it("should render chef name as 'Anonymous' when it is not supplied", function () {
      const wrap = mount(
        <RecipeDetail
          title="Title"
          imageUrl="ImageUrl"
          chef=""
          description="Description"
          tags={[{ name: 'tag1' }, { name: 'tag2' }]}
        />
      );
      expect(wrap.find('.recipeChef').text()).toBe('Chef Anonymous');
    });
  });
});

describe('Components', () => {
  describe('RecipeDetail', () => {
    it('should render Tag components without throwing an error', function () {
      const wrap = shallow(
        <RecipeDetail
          title="Title"
          imageUrl="ImageUrl"
          chef="ChefName"
          description="Description"
          tags={[{ name: 'tag1' }, { name: 'tag2' }]}
        />
      );
      expect(wrap.find('Tag')).toHaveLength(2);
    });
  });
});

describe('Components', () => {
  describe('RecipeDetail', () => {
    it("should render Tag component with 'text' property without throwing an error", function () {
      const wrap = shallow(
        <RecipeDetail
          title="Title"
          imageUrl="ImageUrl"
          chef="ChefName"
          description="Description"
          tags={[{ name: 'tag1' }]}
        />
      );
      expect(wrap.find('Tag').first()).toHaveProperty('text');
    });
  });
});

describe('Components', () => {
  describe('RecipeDetail', () => {
    it("should render Tag component with 'text' property value without throwing an error", function () {
      const wrap = shallow(
        <RecipeDetail
          title="Title"
          imageUrl="ImageUrl"
          chef="ChefName"
          description="Description"
          tags={[{ name: 'tag1' }]}
        />
      );
      expect(wrap.find('Tag').first().prop('text')).toEqual('tag1');
    });
  });
});
