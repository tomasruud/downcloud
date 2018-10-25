import React from 'react'
import 'spinkit/css/spinners/2-double-bounce.css'
import {wrapper, ball} from './Spinner.module.css'

export default () => (
  <div className={['sk-double-bounce', wrapper].join(' ')}>
    <div className={['sk-child', ball].join(' ')} />
    <div className={['sk-child sk-double-bounce2', ball].join(' ')} />
  </div>
)
