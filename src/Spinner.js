import React from 'react'

import 'spinkit/css/spinners/2-double-bounce.css'

export default function Spinner () {
  return (
    <div className='sk-double-bounce spinner mx-auto'>
      <div className='sk-child sk-double-bounce1' />
      <div className='sk-child sk-double-bounce2' />
    </div>
  )
}
