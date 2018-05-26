import React from 'react'
import Emoji from './Emoji'
import info from '../package.json'
import './footer.css'

export default () => (
  <footer className="footer">
    <ul>
      <li>
        Made with <Emoji label="chill" emoji="🤙" /> by Tomas
      </li>

      <li className="separate">
        <a
          href="https://soundcloud.com/autodrums"
          target="_blank"
          rel="noopener noreferrer">
          @autodrums
        </a>{' '}
        on Soundcloud
      </li>

      <li>
        <a
          href="https://github.com/tomasruud"
          target="_blank"
          rel="noopener noreferrer">
          @tomasruud
        </a>{' '}
        on Github
      </li>

      <li className="separate">
        <a
          href="https://github.com/tomasruud/downcloud/issues"
          target="_blank"
          rel="noopener noreferrer">
          Report issues
        </a>{' '}
        <Emoji label="bug" emoji="🐛" />
      </li>

      <li>Version {info.version}</li>
    </ul>
  </footer>
)
