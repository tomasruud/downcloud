import React from 'react'
import { Button } from 'reactstrap'

export default function Login ({onLoginClick}) {
  return (
    <div>
      <h1>Hello!</h1>
      <p className='lead'>This site helps you download your own Souncloud tracks as original, uncompressed files.</p>
      <p>Press the button below to continue. <span role='img' aria-label='Hand pointing down'>👇</span></p>
      <Button color='primary' size='lg' onClick={onLoginClick}>Sign in with Soundcloud</Button>
    </div>
  )
}
