import React from 'react'
import PropTypes from 'prop-types'
import styles from './Raw.module.css'

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
    this.el.querySelectorAll('pre code').forEach(hl.highlightBlock)
  }

  setEl = el => {
    this.el = el
  }

  render() {
    const {children} = this.props

    return (
      <pre ref={this.setEl} className={styles.raw}>
        <code>{JSON.stringify(children, null, 2)}</code>
      </pre>
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
