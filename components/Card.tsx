import * as React from 'react';

const Card = (props) => {
  const { title, imageId } = props;
  return (
    <div className='cardContainer'>
      <img className='cardImage' src='picture.png'></img>
      <div className='cardTitle'>{title}</div>
    </div>
  );
};

export default Card;
