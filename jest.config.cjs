/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/jest-setup.js"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/.jest/identity-obj-proxy-esm.js",
  },
};
