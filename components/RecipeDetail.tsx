import * as React from 'react';
import Tag from './Tag';

const RecipeDetail: React.FC<RecipeDetailProps> = (props) => {
  const { title, imageUrl, chef, description, tags } = props;

  const formattedDesc = replaceRegex(description);

  return (
    <div className="recipeContainer">
      <img
        className="recipeImage"
        src={imageUrl}
        alt={title}
        width="787px"
        height="524px"
      ></img>
      <div className="recipeInfo">
        <div className="recipeTitle">{title}</div>
        <div
          className="recipeDescription"
          dangerouslySetInnerHTML={{ __html: formattedDesc }}
        ></div>
        <div className="recipeChef">Chef {chef ? chef : 'Anonymous'}</div>
        <div className="recipeTags">
          <div className="tagList">
            {tags.map((tag) => (
              <Tag text={tag.name} key={tag.name}></Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

//TODO:: Need to know the general patterns here. Below applies to only current data.
const replaceRegex = (str: string): string => {
  const starRegex = new RegExp(/\*(.*?)\*/, 'ig');
  str = str.replace(starRegex, '<span class="starClass">$1</span>');

  const usRegex = new RegExp(/_{2}(.*?)_{2}/, 'ig');

  str = str.replace(usRegex, '<span class="ucClass">$1</span>');

  const videoRegex = new RegExp(/\[VIDEO]\((.*?)\)/, 'ig');

  str = str.replace(videoRegex, '<a class="linkClass" href="$1">$1</a>');

  return str;
};

interface RecipeDetailProps {
  title: string;
  imageUrl: string;
  chef: string;
  description: string;
  tags: Array<{ name: string }>;
}

export default RecipeDetail;
