# Contributing

Thank you for your interest in contributing to `@caripizza/ui`.

I made this library open-source as a way to showcase work and jump-start frontend projects, but I also welcome outside improvements from collaborators.

If you'd like to submit a new feature idea or bug report, please follow these guidelines:

1. [Open a new GitHub issue](https://github.com/caripizza/ui/issues/new)

2. Use this format for your branch name:
    ```bash
      <github-username>/<issue-id-or-description>
      # ex: caripizza/3-cleanup-font-weights
    ```

3. Use [JSDoc tags](https://jsdoc.app/tags-deprecated.html) when applicable

## Resources
[WIKI](https://github.com/caripizza/ui/wiki/Resources)

Helpful VS Code extensions:
  - ESLint
  - Prettier
  - Jest/React Snippets
  - Tailwind CSS Intellisense

-----

### Installs
```bash
# use latest LTS version node 14
nvm use --lts=fermium

# install dependencies
yarn

# start dev server
yarn storybook

# build npm package
yarn build
```

### Run tests locally
Jest
```bash
yarn test

# watch
yarn test:watch

# view coverage
yarn test:coverage
```

Cypress
```bash
# run tests with Cypress admin
yarn cypress:open

# run component tests in headless Chrome
yarn cypress:run-comp

# run e2e and interaction tests in headless Electron:
yarn build:css

yarn build-storybook

yarn concurrently -k -s first -n "SB,TEST" -c "magenta,blue" \
  "yarn http-server storybook-static --port 6006 --silent" \
  "yarn wait-on tcp:6006 && yarn test-storybook && yarn cypress:run-e2e"
```
