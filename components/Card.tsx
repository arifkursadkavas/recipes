import * as React from 'react';

const Card = (props) => {
  const { title, imageUrl } = props;
  return (
    <div className='cardContainer'>
      <img className='cardImage' src={imageUrl}></img>
      <div className='cardTitle'>{title}</div>
    </div>
  );
};

export default Card;
