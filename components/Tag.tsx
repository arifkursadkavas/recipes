import React from 'react';

const Tag = (props) => {
  const { text } = props;
  return (
    <div className='tagContainer'>
      <span className='tagText'>{text}</span>
    </div>
  );
};

export default Tag;
