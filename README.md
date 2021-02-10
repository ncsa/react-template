## React Template

A template for React web applications

This template is configured with the latest LTS version of Node (v14).

### Bundling (webpack):

Use `npm start` to start the dev server.

Use `npm run build` to create production build.

- The dev server runs on port 8080.
- The bundle is put in `build` folder.
- Babel presets are configured in `babel.config.json`.
- The main entrypoint is `src/app.tsx`.
- The only included polyfills are from `@babel/polyfill`. Custom polyfills can be added in `src/polyfill.js`.
- The current config only supports css. CSS frameworks such as SASS and Less can be enabled in `module.rules` in `webpack.common.js`.

#### Config files:

- `webpack.common.js` (shared config)
- `webpack.dev.js`
- `webpack.prod.js`

#### Plugins:

`HtmlWebpackPlugin`: Uses `src/index.html` as the main entrypoint for the project.

`DefinePlugin`: Defines the following environment variables:

| Variable      | default value                       | Notes |
|---------------|-------------------------------------|-------|
| `ENV`         | `test`, `development`, `production` | The value is set automatically based on the running environment |
| `PUBLIC_PATH` | `/`                                 | The context that the app is running in (e.g. `/app` if the app is accessible at `https://<domain>/app`). It can be set via `PUBLIC_PATH` environment variable and must end with a slash. |

`FaviconsWebpackPlugin`: Generates favorite icons from the image in `src/images/favicon.png`.

`MiniCssExtractPlugin`: Extracts the styling from JS files into css files.

`CleanWebpackPlugin`: Removes and cleans up the build folder before a new build.

`BundleAnalyzerPlugin`: Provides information and analytics on the generated bundle. It can be accessed on `localhost:8081` and is only available in development mode.

### Typescript:

- See `tsconfig.json` for customized features.
- Global types are in `src/types/index.d.ts`.

### Linting (Eslint + Prettier):

Use `npm run lint` to see a list of linting issues.

Use `npm run lint:fix` to fix those issues that can be handled automatically.

- See `.prettierrc` for Prettier configs.
- See `.eslintrc` for Eslint configs and `.eslintignore` for the ignored patterns.

### Testing (Jest):

Use `npm run test` to run the test units.

Use `npm run test:watch` to start the test runner in watch mode.

- See `jest.config.js` for customized features.
- Jest is called with `coverage` flag to report code coverage.
- Uses the following patterns to discover tests:
  - `**/__tests__/**/*.[jt]s?(x)`
  - `**/?(*.)+(spec|test).[tj]s?(x)`

### Documentation (Typedoc):

Use `npm run docs` to generate docs.

- Configured in `typedoc.json`.
- Generated documentation is put in `docs` folder.

### Pre-commit hooks (Husky + lint-staged):

- Configured in `.huskyrc` and `.lintstagedrc`. The only check is `eslint` rules.

### Repo

The repo has one Github workflow that checks the linting rules and runs the tests (see `.github/workflows/test.yaml`).
There are issue and PR templates in `.github`.
