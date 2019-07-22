import React from 'react'
import styled from 'styled-components'

import {Emoji, Paragraph, Reveal, TextButton} from '../components'
import news from '../news'

const Wrap = styled.footer`
  margin-top: 2rem;
  font-size: 0.8rem;

  padding: 2rem;
  background-color: ${props => props.theme.lightTint};
`

const Footer = () => (
  <Wrap>
    <Paragraph>
      <TextButton href="https://buymeacoff.ee/tomas" external={true}>
        Buy me a slush? <Emoji label="ice" emoji="🍧" />
      </TextButton>
    </Paragraph>

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

    <Reveal label="News">
      {news.map((n, i) => (
        <React.Fragment key={i}>
          <strong>{n.date}</strong>
          <Paragraph>{n.content}</Paragraph>
        </React.Fragment>
      ))}
    </Reveal>

    <Reveal label="Legal stuff">
      <Paragraph>
        None of your data will be stored anywhere, everything is done in your
        browser session and destroyed once you exit/refresh the site.
      </Paragraph>
    </Reveal>

    <Paragraph style={{marginBottom: 0}}>
      <TextButton
        href="https://github.com/tomasruud/downcloud/issues"
        external={true}
      >
        Report issues
      </TextButton>{' '}
      <Emoji label="bug" emoji="🐛" />
      <br />
      Version {process.env.REACT_APP_VERSION}
    </Paragraph>
  </Wrap>
)

export default Footer
