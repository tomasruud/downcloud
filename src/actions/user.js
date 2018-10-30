import {Soundcloud} from '../services'

export const REQUEST_USER = 'REQUEST_USER'
export const requestUser = () => ({
  type: REQUEST_USER
})

export const RECEIVE_USER = 'RECEIVE_USER'
export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

export const fetchUser = () => async dispatch => {
  dispatch(requestUser())
  const user = await Soundcloud.getMe()
  return dispatch(receiveUser(user))
}
