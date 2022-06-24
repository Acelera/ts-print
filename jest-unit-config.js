// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./jest.config')
config.testMatch = ['src/__tests__/*.spec.ts', 'src/__tests__/**/*.spec.ts']
module.exports = config
