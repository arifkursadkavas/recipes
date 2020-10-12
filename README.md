# Marley Spoon Recipe List

A React web app in Typescript, utilizing SSR with Nextjs, Apollo client to consume Contentful API with GraphQL queries

## Installation

run below command to get necessary npm packages

```bash
npm install
```

## Running

Development

```diff
-Before running, enter the SPACE_ID and ACCESS_TOKEN fields inside the file ./config/auth.ts
-in order to access the relevant Contentful Space
```

Run below command from the root of the application. Application is served from port 4200

```bash
npm run dev
```

Production

You can export the app with static resources

```bash
npm run build
npm run export
```

to deploy on a hosting server. Static export is found in the 'out' directory.

## Linting

Run

```bash
npm run lint
```

to check for the eslint rules denoted in .eslintrc

## Testing

Run tests using the following command

```bash
npm run test
```

## Contributing

## License

[MIT](https://choosealicense.com/licenses/mit/)
