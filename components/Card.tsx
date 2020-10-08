import * as React from 'react';
import { Component } from 'react';

class Card extends Component {
  render() {
    const { title, imageId } = this.props;
    return (
      <div className='cardContainer'>
        <img className='cardImage' src='picture.png'></img>
        <div className='cardTitle'>
          <h4>{title}</h4>
        </div>
      </div>
    );
  }
}

export default Card;
