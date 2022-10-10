/**
 * @type {import('@storybook/core-common').StorybookConfig}
 */
const config = {
  stories: [
    '../src/stories/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-themes',
    '@storybook/addon-a11y',
    'storybook-addon-rtl'
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
      extensions: ['.ts', '.tsx', '.js']
    }
    return config;
  }
};

module.exports = config;