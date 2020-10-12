import * as React from 'react';

const Card: React.FC<CardProps> = (props) => {
  const { title, imageUrl } = props;
  return (
    <div className="cardContainer" onClick={props.onClick}>
      <img
        className="cardImage"
        src={imageUrl}
        alt={title}
        width="100px"
        height="100px"
      ></img>
      <div className="cardTitle">
        <p>{title}</p>
      </div>
    </div>
  );
};
interface CardProps {
  title: string;
  imageUrl: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export default Card;
