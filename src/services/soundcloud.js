const SC = require('soundcloud')

export default class Soundcloud {
  constructor(options) {
    this.clientId = options.clientId
    this.redirectUri = options.redirectUri
    this.apiBase = 'https://api.soundcloud.com'
    this.pageSize = 200

    SC.initialize({
      client_id: this.clientId,
      redirect_uri: this.redirectUri
    })
  }

  async authenticate() {
    const session = await SC.connect()
    const token = session.oauth_token

    this.accessToken = token

    return token
  }

  async getAllTracksForUser() {
    let result = await SC.get('/me/tracks', {
      limit: this.pageSize,
      linked_partitioning: 1
    })
    let tracks = []
    let completed = false

    while (!completed) {
      result.collection.forEach(track =>
        tracks.push({
          title: track.title,
          url: track.download_url + '?oauth_token=' + this.accessToken
        })
      )

      if (result.next_href) {
        const url = result.next_href.replace(this.apiBase, '')
        result = await SC.get(url)
      } else {
        completed = true
      }
    }

    return tracks
  }
}
