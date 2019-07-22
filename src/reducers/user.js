import {combineReducers} from 'redux'

const loading = (state = false, action) => {
  if (action.type === 'REQUEST_USER') {
    return true
  }

  if (action.type === 'RECEIVE_USER') {
    return false
  }

  return state
}

const user = (state = null, action) => {
  if (action.type === 'RECEIVE_USER') {
    return action.user
  }

  return state
}

export default combineReducers({
  loading,
  user
})
