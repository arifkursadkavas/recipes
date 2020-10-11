import { gql } from '@apollo/client';

export const GET_RECIPE = gql`
  query($id: String!) {
    recipe(id: $id) {
      id: sys {
        id
      }
      title
      description
      chef {
        name
      }
      photo {
        url
      }
      tagsCollection {
        items {
          name
        }
      }
    }
  }
`;

export const GET_RECIPES = gql`
  query($preview: Boolean) {
    recipeCollection(preview: $preview) {
      items {
        id: sys {
          id
        }
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
