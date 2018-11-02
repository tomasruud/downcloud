import {REQUEST_ACCESS_TOKEN, RECEIVE_ACCESS_TOKEN} from '../actions'

const initial = {
  token: false,
  isFetching: false
}

const reduce = (state = initial, action) => {
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

export default reduce
