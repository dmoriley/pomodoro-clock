This project uses Vite and pnpm as the package manager of choice.

## Available Scripts

In the project directory, you can run:

### `pnpm gen`

Launches file generation tool for creating components, pages, services and hooks. Follow the prompts to complete.

### `pnpm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `pnpm test`

Launches the test runner in the interactive watch mode.<br>

### `pnpm build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `pnpm preview`

The application is built in a production like environment and opened in the browser without HMR using vite preview.

### Scss

The `custom.d.ts` file adds a global declaration for scss modules for TypeScript to recognize the imports in the tsx files.

The package `typescript-plugin-css-modules` is part of the devDeps. To take advantage of the class intellisense in VS Code you have to tell vscode to use the workspace version of type script. Do this by opening the command by hitting `F1` and then typing `TypeScript: Select TypeScript Version...` and then selecting the workspace version. Now in the tsx files you should be able to see the exported classes names from the scss modules.

#### Testing and Scss

In order for tests to run with scss modules being imported those files have to be mapped in the jest config under `moduleNameMapper`. Currently it points to a custom proxy that will return the class names required for the test. Option 2 instead of using the custom mapper is to use the package `identity-obj-proxy` and then enable `esModuleInterop` in the ts-config file.
