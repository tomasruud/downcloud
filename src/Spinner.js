import React from 'react'
import 'spinkit/css/spinners/2-double-bounce.css'
import {colors} from './theme'

const style = {
  backgroundColor: colors.primary
}

export default () => (
  <div className="sk-double-bounce spinner" style={{margin: 0}}>
    <div className="sk-child sk-double-bounce1" style={style} />
    <div className="sk-child sk-double-bounce2" style={style} />
  </div>
)
