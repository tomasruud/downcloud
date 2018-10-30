import {Soundcloud} from '../services'

export const REQUEST_TRACKS = 'REQUEST_TRACKS'
export const requestTracks = () => ({
  type: REQUEST_TRACKS
})

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS'
export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  collection: tracks
})

export const fetchTracks = () => async (dispatch, getState) => {
  dispatch(requestTracks())
  const tracks = await Soundcloud.getTracks()

  const token = getState().accessToken.token

  const modified = tracks.map(track => ({
    ...track,
    download: Soundcloud.makeDownloadable(track.download_url, token)
  }))

  return dispatch(receiveTracks(modified))
}
