import {REQUEST_USER, RECEIVE_USER} from '../actions'

const reduce = (
  state = {
    entity: {},
    isFetching: false
  },
  action
) => {
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
        entity: action.user
      }

    default:
      return state
  }
}

export default reduce
