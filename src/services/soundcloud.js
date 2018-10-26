const SC = require('soundcloud')

SC.initialize({
  client_id: 'c205c3e2eedb509dff1c1147765b055d',
  redirect_uri: 'https://downcloud.ruud.ninja/callback.html'
})

export const authenticate = async () => {
  const session = await SC.connect()
  return session.oauth_token
}

export const getTracks = async () => {
  let result = await SC.get('/me/tracks', {
    limit: 50,
    linked_partitioning: 1
  })

  let tracks = []
  let completed = false

  while (!completed) {
    tracks.push(result.collection)

    if (result.next_href) {
      const url = result.next_href.replace('https://api.soundcloud.com', '')
      result = await SC.get(url)
    } else {
      completed = true
    }
  }

  return tracks
}

export const makeDownloadable = (url, token) => url + '?oauth_token=' + token
