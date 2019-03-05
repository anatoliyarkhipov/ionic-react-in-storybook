An attempt to render components from @ionic/react in Storybook leads to an "Object(...)
is not a function" error. This repo is a minimal reproducible example of the problem.

Run this commands and open http://localhost:9001 to see the error:
```bash
npm install
npm run storybook
```

`@babel/core` and `babel-loader` are needed by Storybook, `react-router` - by @ionic/react.
