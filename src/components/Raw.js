import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Pre = styled.pre`
  font-size: 0.8rem;
`

class Raw extends React.Component {
  async componentDidMount() {
    await import('highlight.js/styles/github.css')
    await this.highlight()
  }

  async componentDidUpdate() {
    await this.highlight()
  }

  async highlight() {
    const hl = await import('highlight.js/lib/highlight')
    const lang = await import('highlight.js/lib/languages/json')

    hl.registerLanguage('json', lang.default)
    hl.highlightBlock(this.el)
  }

  setEl = el => {
    this.el = el
  }

  render() {
    const {children} = this.props

    return (
      <Pre>
        <code ref={this.setEl}>{JSON.stringify(children, null, 2)}</code>
      </Pre>
    )
  }
}

Raw.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]).isRequired
}

export default Raw
