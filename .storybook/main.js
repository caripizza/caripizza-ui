/**
 * @type {import('@storybook/core-common').StorybookConfig}
 */
const config = {
  stories: ['../src/stories/*.stories.mdx', '../src/stories/*.stories.@(js|jsx|ts|tsx|.mdx)'],
  addons: [
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/react',
  features: {
    postcss: false
  },
  core: {
    disableTelemetry: true,
  },
  webpackFinal: async (config) => {
    config.resolve = {
      ...(config.resolve || {}),
      extensions: ['.ts', '.tsx', '.js']
    }
    return config;
  }
};

module.exports = config;