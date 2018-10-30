module.exports = {
  require: [
    'normalize.css',
    './src/global.module.css'
  ],
  skipComponentsWithoutExample: true,
  usageMode: 'expand',
  dangerouslyUpdateWebpackConfig: (c) => {
    c.cache = false
    return c
  }
}
