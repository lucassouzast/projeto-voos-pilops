export default {
  transform: {
    '^.+\\.(t|j)sx?$': 'babel-jest',
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"]
};