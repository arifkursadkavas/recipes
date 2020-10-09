import { gql } from '@apollo/client';

export const GET_RECIPES = gql`
  query($preview: Boolean) {
    recipeCollection(preview: $preview) {
      items {
        title
        description
        chef {
          name
        }
        photo {
          url
        }
        tagsCollection(preview: $preview) {
          items {
            name
          }
        }
      }
    }
  }
`;
