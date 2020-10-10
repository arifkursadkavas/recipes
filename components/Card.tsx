import * as React from 'react';

const Card = (props) => {
  const { title, imageUrl } = props;
  return (
    <div className='cardContainer' onClick={props.onClick}>
      <img
        className='cardImage'
        src={imageUrl}
        alt={title}
        width='100px'
        height='100px'
      ></img>
      <div className='cardTitle'>{title}</div>
    </div>
  );
};

export default Card;
