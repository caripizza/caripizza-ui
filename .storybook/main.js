const path = require('path');

/**
 * @type {import('@storybook/core-common').StorybookConfig}
 */
const config = {
  stories: [
    '../src/stories/Button.stories.tsx',
    '../src/stories/Theme.stories.mdx',
    '../src/stories/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-themes'
  ],
  framework: '@storybook/react',
  features: {
    postcss: false
  },
  core: {
    disableTelemetry: true,
    builder: 'webpack5',
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
  webpackFinal: async (config) => {
    config.resolve = {
      ...(config.resolve || {}),
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        ...config.resolve?.alias,
        '../dist/output.css': [path.resolve(__dirname, '../dist/'), path.resolve(__dirname, '../')],
      }
    }
    return config;
  }
};

module.exports = config;