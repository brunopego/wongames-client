module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/**/_app.tsx',
    '!src/**/_document.tsx',
    '!src/pages/index.tsx',
    '!src/styles/*.*',
    '!src/types/*.*'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
};
