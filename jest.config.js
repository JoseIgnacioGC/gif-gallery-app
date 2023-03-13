/** @type {import('ts-jest').JestConfigWithTsJest} */
const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  preset: 'ts-jest',
  verbose: true,
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['<rootDir>/__test__/setupEnv.js']
}

module.exports = createJestConfig(customJestConfig)
