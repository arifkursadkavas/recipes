import * as React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { ISingleRecipe } from '../../models/recipe.model';
import { GET_RECIPE } from '../../graphql/queries';
import RecipeDetails from '../../components/RecipeDetail';
import Head from 'next/head';

const Recipe = ({}) => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Loading...</div>;
  }

  const { loading, error, data } = useQuery<ISingleRecipe>(GET_RECIPE, {
    variables: { id: id },
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
    <div>
      <Head>
        <meta property='og:title' content={data.recipe?.title} />
        <meta property='og:description' content={data.recipe?.description} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='../favicon-96x96.png' />
        <meta property='og:image:url' content='../favicon-96x96.png' />
        <meta property='og:image:secure_url' content='' />
        <meta property='og:image:width' content='200' />
        <meta property='og:image:height' content='200' />
      </Head>
      <RecipeDetails
        title={data.recipe?.title}
        imageUrl={data.recipe?.photo?.url}
        chef={data.recipe?.chef?.name}
        description={data.recipe?.description}
        tags={data.recipe?.tagList}
      ></RecipeDetails>
    </div>
  );
};

export default Recipe;
