// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./jest.config')
config.coverageThreshold = {
  global: {
    lines: 80,
    statements: 80,
    branches: 80,
    functions: 80
  }
}
module.exports = config
