import {Soundcloud} from '../services'

export const REQUEST_ACCESS_TOKEN = 'REQUEST_ACCESS_TOKEN'
export const requestAccessToken = () => ({
  type: REQUEST_ACCESS_TOKEN
})

export const RECEIVE_ACCESS_TOKEN = 'RECEIVE_ACCESS_TOKEN'
export const receiveAccessToken = token => ({
  type: RECEIVE_ACCESS_TOKEN,
  token
})

export const fetchAccessToken = () => async dispatch => {
  dispatch(requestAccessToken())
  const token = await Soundcloud.authenticate()
  return dispatch(receiveAccessToken(token))
}
