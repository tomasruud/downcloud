import {combineReducers} from 'redux'

import router from './router'
import session from './session'
import tracks from './tracks'
import user from './user'

export default combineReducers({
  router,
  session,
  tracks,
  user
})
