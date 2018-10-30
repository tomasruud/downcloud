import { combineReducers } from 'redux'

import accessToken from './auth'
import tracks from './tracks'
import user from './user'

export default combineReducers({
  accessToken,
  tracks,
  user
})
