import React from 'react'

import info from '../package.json'
import { Paragraph, Emoji, TextButton, Heading } from './components'
import { element, container, footer } from './Layout.module.css'

const Layout = ({children}) => (
  <div className={container}>
    <header className={element}>
      <Heading type="h1">
        Downcloud <Emoji label="Music note" emoji="🎵" />
      </Heading>
    </header>
    <main className={element}>{children}</main>
    <footer className={footer}>
      <Paragraph>
        <TextButton
          href="https://soundcloud.com/autodrums"
          external={true}
        >
          @autodrums
      </TextButton>{' '}
        on Soundcloud
      <br />
        <TextButton
          href="https://github.com/tomasruud"
          external={true}
        >
          @tomasruud
      </TextButton>{' '}
        on Github
    </Paragraph>

      <Paragraph style={{marginBottom: 0}}>
        <TextButton
          href="https://github.com/tomasruud/downcloud/issues"
          external={true}
        >
          Report issues
      </TextButton>{' '}
        <Emoji label="bug" emoji="🐛" />
        <br />
        Version {info.version}
      </Paragraph>
    </footer>
  </div>
)

export default Layout
