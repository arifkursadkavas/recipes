import * as React from 'react';

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
      <div className='recipeTitle'>{title}</div>
      <div className='recipeTitle'>{description}</div>
      <div className='recipeTitle'>{chef}</div>
      <div className='recipeTitle'>{tags}</div>
    </div>
  );
};

export default RecipeDetails;
