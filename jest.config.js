module.exports = {
  testPathIgnorePatterns: ["/node_modules", "/public", "./src/hooks", "./src/models", "./src/redux"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  transform: { "ˆ.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest" },
  testEnvironment: 'jsdom'
}