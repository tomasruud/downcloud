import {REQUEST_TRACKS, RECEIVE_TRACKS} from '../actions'

const reduce = (
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

export default reduce
