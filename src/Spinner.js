import React, {Component} from 'react'

import 'spinkit/css/spinners/2-double-bounce.css'

export default class Spinner extends Component {
  render () {
    return (
      <div className='sk-double-bounce spinner mx-auto'>
        <div className='sk-child sk-double-bounce1' />
        <div className='sk-child sk-double-bounce2' />
      </div>
    )
  }
}
