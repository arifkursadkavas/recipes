module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/components'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.jest.json',
    },
  },
};
