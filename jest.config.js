/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    verbose: true,
    "testEnvironment": "jsdom",
    transform: {
        '^.+\\.(t)s$': 'ts-jest',
        '\\.[jt]sx?$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    transformIgnorePatterns: ['/node_modules/(?!(foo|bar)/)', '/bar/'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less)$': 'identity-obj-proxy'
    },
};
