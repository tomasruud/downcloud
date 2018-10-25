import React, {Fragment} from 'react'
import { Button, Emoji, Paragraph} from '../components'

export default ({onLoginClick}) => (
  <Fragment>
    <Paragraph>
      This site helps you download your own Souncloud tracks as original,
      uncompressed files.
    </Paragraph>
    <Button onClick={onLoginClick}>
      <Emoji label="Key" emoji="🔑" /> Sign in with Soundcloud
    </Button>{' '}
    to get started
  </Fragment>
)
