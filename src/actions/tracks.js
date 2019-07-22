import {Soundcloud} from '../services'
import {session} from '../selectors'

export const get = () => async (dispatch, getState) => {
  dispatch({type: 'REQUEST_TRACKS'})

  const tracks = await Soundcloud.getTracks()

  const token = session.token(getState())

  const modified = tracks.map(track => ({
    ...track,
    download: Soundcloud.makeDownloadable(track.download_url, token)
  }))

  return dispatch({
    type: 'RECEIVE_TRACKS',
    tracks: modified
  })
}
