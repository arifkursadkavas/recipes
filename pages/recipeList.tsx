import { useQuery } from '@apollo/client';
import Head from 'next/head';
import Router from 'next/router';
import { Fragment } from 'react';
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
    return (
      <div>
        Error!(Could be possible that you did not enter the SPACE_ID and the
        ACCESS_TOKEN inside ./config/auth.ts)
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <meta property='og:title' content='Marley Spoon recipes' />
        <meta property='og:description' content='Marley Spoon recipes' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='../favicon-96x96.png' />
        <meta property='og:image:url' content='../favicon-96x96.png' />
        <meta property='og:image:secure_url' content='' />
        <meta property='og:image:width' content='200' />
        <meta property='og:image:height' content='200' />
      </Head>
      <div className='cardRow'>
        {data &&
          data.recipeCollection.items.map((recipe) => (
            <div className='cardColumn' key={recipe.title}>
              <Card
                title={recipe.title}
                imageUrl={recipe.photo.url}
                onClick={() => handleCardClick(recipe.id.id)}
              ></Card>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

const handleCardClick = (recipeId) => {
  Router.push(`/recipes/${encodeURIComponent(recipeId)}`);
};

export default RecipeList;
