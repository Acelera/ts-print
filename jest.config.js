module.exports = {
  testMatch: ['**/*.spec.ts', '**/*.test.ts', '**/*.e2e-spec.ts'],
  roots: ['<rootDir>/src'],
  reporters: ['default', ['jest-sonar', {
    outputName: 'sonar-qube-report.xml'
  }]],
  collectCoverage: true,
  testPathIgnorePatterns: [],
  coveragePathIgnorePatterns: [
    "src/*/I[A-z]*.ts"
  ],
  collectCoverageFrom: [
    '<rootDir>/**/*.ts',
    '!<rootDir>/src/**/*.{entity,module,mock,spy,stub,enum,dto,spec,e2e-spec,test,validation}.ts'
  ],
  coverageReporters: ['json', 'lcov', 'text', 'html'],
  coverageDirectory: '<rootDir>/coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  // Suppress console.log when running tests
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}
