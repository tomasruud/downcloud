import {REQUEST_TRACKS, RECEIVE_TRACKS} from '../actions'

const initial = {
  collection: [],
  isFetching: false,
  isSet: false
}

const reduce = (state = initial, action) => {
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
        isSet: true,
        collection: action.collection
      }

    default:
      return state
  }
}

export default reduce
