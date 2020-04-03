import React from 'react'
import styled from 'styled-components'

import {Paragraph, Reveal, TextButton} from '../components'
import changelog from '../changelog'

const Wrap = styled.footer`
  margin-top: 2rem;
  font-size: 0.8rem;

  padding-top: 2rem;
  border-top: 1px solid ${(props) => props.theme.dark};
`

const Footer = () => (
  <Wrap>
    <Paragraph>
      <TextButton href="https://www.buymeacoffee.com/tomas" external={true}>
        Buy me a coffee?
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

    <Reveal label="Changelog">
      {changelog.map((n, i) => (
        <React.Fragment key={i}>
          <strong>v{n.version}</strong> ({n.date})
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
      </TextButton>
      <br />
      Version {process.env.REACT_APP_VERSION}
    </Paragraph>
  </Wrap>
)

export default Footer
