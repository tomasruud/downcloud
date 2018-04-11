export default class Soundcloud {
  async authenticate () {
    return '123-this-is-some-token'
  }

  async getAllTracksForUser () {
    return new Promise(resolve => setTimeout(() => {
      resolve([
        {title: 'Funk Blaster', url: 'https://google.com'},
        {title: 'Lost in Thought', url: 'https://google.com'},
        {title: '7th Dimension', url: 'https://google.com'}
      ])
    }, 1000))
  }
}
