/** @type {import('jest').Config} */
const config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/jest-setup.js"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/.jest/identity-obj-proxy-esm.js",
  },
};

module.exports = config;
