export default class Soundcloud {
  async authenticate() {
    return '123-this-is-some-token'
  }

  async getAllTracksForUser() {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve([
          {
            title: 'Funk Blaster',
            url:
              'https://github.com/sindresorhus/multi-download/raw/master/fixture/rainbow.jpg.zip'
          },
          {
            title: 'Lost in Thought',
            url:
              'https://github.com/sindresorhus/multi-download/raw/master/fixture/unicorn.jpg.zip'
          },
          {
            title: '7th Dimension',
            url:
              'https://github.com/sindresorhus/multi-download/raw/master/fixture/unicorn2.jpg.zip'
          }
        ])
      }, 1000)
    )
  }
}
