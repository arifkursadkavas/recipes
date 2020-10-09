export interface IRecipe {
  id: number;
  title: string;
  photo: Photo;
  tagList: string[];
  description: string;
  chefName: string;
}

interface Photo {
  url: string;
}

export interface IRecipeList {
  recipeCollection: {
    items: IRecipe[];
  };
}
