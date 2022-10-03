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
    'storybook-addon-themes',
    '@storybook/addon-a11y'
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
    }
    return config;
  }
};

module.exports = config;