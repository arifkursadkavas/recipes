import * as React from 'react';
import Tag from './Tag';

const RecipeDetails = (props) => {
  const { title, imageUrl, chef, description, tags } = props;
  return (
    <div className='recipeContainer' onClick={props.onClick}>
      <img
        className='recipeImage'
        src={imageUrl}
        alt={title}
        width='787px'
        height='524px'
      ></img>
      <div className='recipeInfo'>
        <div className='recipeTitle'>{title}</div>
        <div className='recipeDescription'>{description}</div>
        <div className='recipeChef'>Chef {chef}</div>
        <div className='recipeTags'>
          <div className='tagList'>
            {tags.map((tag) => (
              <Tag text={tag.name} key={tag.name}></Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
