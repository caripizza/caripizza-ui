import { defineConfig } from 'cypress';
import storybookConfig from './.storybook/main';

export default defineConfig({
  projectId: 'fz5w63',
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig: storybookConfig.webpackFinal,
    },
  },
  video: false,
  e2e: {
    baseUrl: 'http://localhost:6006',
    setupNodeEvents(on /*config*/) {
      // implement node event listeners here
      on('after:spec', () => console.log('e2e specs complete!'));
    },
  },
});
