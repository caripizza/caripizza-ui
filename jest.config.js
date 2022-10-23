/**
 * @type {import('jest').Config}
 */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/cypress/',
    '/.storybook/',
    '/.husky/',
    '/.github/',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/*.stories.mdx/',
    '/*.stories.tsx/',
  ],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
};
