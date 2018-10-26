import React from 'react'

import info from '../package.json'
import {Paragraph, Emoji, TextButton} from './components'
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
)

const Layout = ({children}) => (
  <div className={container}>
    <main className={element}>{children}</main>
    <Footer />
  </div>
)

export default Layout
