import React, {Fragment} from 'react'
import Emoji from './Emoji'
import './login.css'

export default function LoginView({onLoginClick}) {
  return (
    <Fragment>
      <p>
        This site helps you download your own Souncloud tracks as original,
        uncompressed files.
      </p>
      <button className="button" onClick={onLoginClick}>
        Sign in with Soundcloud
      </button>{' '}
      to get started <Emoji label="Dude running pretty fast" emoji="🏃💨" />
    </Fragment>
  )
}
