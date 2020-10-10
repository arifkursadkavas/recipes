export interface ISingleRecipe {
  recipe: IRecipe;
}

export interface IRecipe {
  id: { id: number };
  title: string;
  photo: IPhoto;
  tagList: string[];
  description: string;
  chef: { name: string };
}

interface IPhoto {
  url: string;
}

export interface IRecipeList {
  recipeCollection: {
    items: IRecipe[];
  };
}
