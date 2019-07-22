import {Soundcloud} from '../services'

export const authenticate = () => async dispatch => {
  dispatch({type: 'REQUEST_ACCESS_TOKEN'})

  const token = await Soundcloud.authenticate()

  return dispatch({
    type: 'RECEIVE_ACCESS_TOKEN',
    token
  })
}
