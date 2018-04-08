import SC from 'soundcloud'
import config from './config'

let token = ''
let items = []

SC.initialize({
  client_id: config.client_id,
  redirect_uri: config.redirect
})

SC.connect()
  .then(function (session) {
    token = session.oauth_token

    return SC.get('/me/tracks', {limit: config.limit, linked_partitioning: 1})
  })
  .then(function (tracks) {
    fetch(tracks)
    console.dir(items)
  })

function fetch (tracks) {
  append(tracks.collection)

  if (tracks.next_href) {
    // Get tracks.next_href
    fetch(tracks)
  }
}

function append (tracks) {
  tracks.forEach(track =>
    items.push({
      title: track.title,
      url: track.download_url + '?oauth_token=' + token
    })
  )
}