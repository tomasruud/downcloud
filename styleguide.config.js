module.exports = {
  require: [
    'normalize.css'
  ],
  styleguideComponents: {
    Wrapper: require('path').join(__dirname, 'styleguide/ThemeWrapper')
  },
  skipComponentsWithoutExample: true,
  usageMode: 'expand',
  dangerouslyUpdateWebpackConfig: (c) => {
    c.cache = false
    return c
  }
}
