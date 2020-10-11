import * as React from 'react';

const Tag: React.FC<TagProps> = (props) => {
  const { text } = props;
  return (
    <div className="tagContainer">
      <span className="tagText">{text}</span>
    </div>
  );
};

interface TagProps {
  text: string;
}

export default Tag;
