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
});
