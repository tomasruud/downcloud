import React from 'react'
import {render} from 'react-snapshot'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

import 'normalize.css'
import './global.module.css'

import App from './App'

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('downcloud')
)
