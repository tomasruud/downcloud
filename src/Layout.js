import React from 'react'

import info from '../package.json'
import {Paragraph, Emoji, TextButton, Reveal} from './components'
import {element, container, footer} from './Layout.module.css'

const Footer = () => (
  <footer className={footer}>
    <Paragraph>
      <TextButton href="https://soundcloud.com/autodrums" external={true}>
        @autodrums
      </TextButton>{' '}
      on Soundcloud
      <br />
      <TextButton href="https://github.com/tomasruud" external={true}>
        @tomasruud
      </TextButton>{' '}
      on Github
    </Paragraph>

    <Reveal label="Legal stuff">
      <Paragraph>
        This app uses cookies for Google Analytics. By using Downcloud you're ok with that. None of your data will be stored anywhere, everything is done in your browser session and destroyed once you exit/refresh the site.
      </Paragraph>
    </Reveal>
    <Paragraph style={{ marginBottom: 0 }}>
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
)

const Layout = ({children}) => (
  <div className={container}>
    <main className={element}>{children}</main>
    <Footer />
  </div>
)

export default Layout
