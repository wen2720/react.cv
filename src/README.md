1. The app is created by the command:

```bash
npm create vite@latest react-cv-githubio --template react
```

The installation procedures are as follows:

```bash
Need to install the following packages:
create-vite@6.2.0
Ok to proceed? (y) y
√ Select a framework: » React
√ Select a variant: » TypeScript + SWC
```

2. Next.js require following depedencies

```bash
npm install next@latest react@latest react-dom@latest
```

3. The react project under the local development server - vite, requires following steps to navigate files from the root of the project.

* Add following key values to the ```defineconfig``` function in vite.config.ts

```bash
resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias '@' to 'src' folder
    },
  },
```
* The ```path` is imported from 'path' which can be downloaded with the following command

```bash
npm install -D @types/node
```

4. To install then apply tailwind css in the vite server, a well documented procedure can be followed through the [link](https://tailwindcss.com/docs/installation/using-vite)

5. Images should be placed in  ```src/assets/``` so they can be optimized.

Further more, tune to the react [site](https://react.dev/learn/start-a-new-react-project#production-grade-react-frameworks) for more information.



