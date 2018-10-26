import {combineReducers} from 'redux'
import {
  REQUEST_ACCESS_TOKEN,
  RECEIVE_ACCESS_TOKEN,
  REQUEST_TRACKS,
  RECEIVE_TRACKS
} from './actions'

const accessToken = (
  state = {
    token: false,
    isFetching: false
  },
  action
) => {
  switch (action.type) {
    case REQUEST_ACCESS_TOKEN:
      return {
        ...state,
        isFetching: true
      }

    case RECEIVE_ACCESS_TOKEN:
      return {
        ...state,
        token: action.token,
        isFetching: false
      }

    default:
      return state
  }
}

const tracks = (
  state = {
    collection: [],
    isFetching: false
  },
  action
) => {
  switch (action.type) {
    case REQUEST_TRACKS:
      return {
        ...state,
        isFetching: true
      }

    case RECEIVE_TRACKS:
      return {
        ...state,
        isFetching: false,
        collection: action.collection
      }

    default:
      return state
  }
}

export default combineReducers({
  accessToken,
  tracks
})
