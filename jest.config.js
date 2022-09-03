/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    verbose: true,
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(t)s$': 'ts-jest',
        '\\.[jt]sx?$': 'babel-jest'
    },
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    transformIgnorePatterns: ['/node_modules/(?!(foo|bar)/)', '/bar/'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy'
    }
}
