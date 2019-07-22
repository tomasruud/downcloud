import {combineReducers} from 'redux'

const loading = (state = false, action) => {
  if (action.type === 'REQUEST_TRACKS') {
    return true
  }

  if (action.type === 'RECEIVE_TRACKS') {
    return false
  }

  return state
}

const tracks = (state = null, action) => {
  if (action.type === 'RECEIVE_TRACKS') {
    return action.tracks
  }

  return state
}

export default combineReducers({
  loading,
  tracks
})
