import {REQUEST_USER, RECEIVE_USER} from '../actions'

const initial = {
  entity: {},
  isFetching: false,
  isSet: false
}

const reduce = (state = initial, action) => {
  switch (action.type) {
    case REQUEST_USER:
      return {
        ...state,
        isFetching: true
      }

    case RECEIVE_USER:
      return {
        ...state,
        isFetching: false,
        entity: action.user,
        isSet: true
      }

    default:
      return state
  }
}

export default reduce
