/** @type {import('ts-jest').JestConfigWithTsJest} */
const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  preset: 'ts-jest',
  verbose: true,
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom'
  // testEnvironment: 'node',
  // testEnvironmentOptions: {
  //   PORT: 3002
  // }
}

module.exports = createJestConfig(customJestConfig)
