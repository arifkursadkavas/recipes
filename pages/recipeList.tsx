import { useQuery, gql } from '@apollo/client';
import Card from '../components/Card';
import { GET_RECIPES } from '../graphql/queries';
import { IRecipeList } from '../models/recipe.model';

const RecipeList = () => {
  const { loading, error, data } = useQuery<IRecipeList>(GET_RECIPES, {
    variables: {},
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  return (
    <div className='cardRow'>
      {data &&
        data.recipeCollection.items.map((recipe) => (
          <div className='cardColumn' key={recipe.title}>
            <Card title={recipe.title} imageUrl={recipe.photo.url}></Card>
          </div>
        ))}
    </div>
  );
};

export default RecipeList;
