# Changelog

All notable changes to this project will be documented in this file.

Project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### [0.1.7] - 11-11-2022
- adds Emoji to molecules/ and unicode emoji library/utils 🤖
- adds typography to atoms/, theme
- adds Cypress e2e and component tests, docs, dependencies

### [0.1.6] - 10-20-2022
- adds CommonJS output to dist (prevent need for additional tooling in Nextjs and jest in order to support the ESM output)
- cleans up Storybook docs, tailwind config
- moves `react` and `react-dom` production dependencies to be peer dependencies only

### [0.1.5] - 10-18-2022
- adds `hot-pink` color to theme (#11), tweaks dark mode `turquoise` color
- adds `disabled`, `selected`, `outlined`, and `error` props + styles to Button
- adds semi-transparent `white-alpha` and `black-alpha` colors for disabled states

### [0.1.4] - 10-12-2022
- adds global CSS vars for font sizing and weights
- refines font families/weights/sizes in tailwind config, excludes serif fonts
- cleans up docs

### [0.1.3] - 10-9-2022
- adds lint-staged and Storybook tooling
- refactors colors
- adds `variant` and `loading` props and secondary button variant
- updates light/dark themes

### [0.1.2] - 10-2-2022
- Adds support for Tailwind CSS (#4)
- Adds `hasDarkSystemTheme` to utils/
- Adds colors to atoms/

### [0.1.1] - 10-1-2022
- Install additional tooling, config files

### [0.1.0] - 10-1-2022
- Initial release of library scaffolding, Button