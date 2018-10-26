import React from 'react'
import PropTypes from 'prop-types'

import {link, visible, closed} from './Reveal.module.css'

class Reveal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggle = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    const {label, children, ...props} = this.props
    const {open} = this.state

    return (
      <span {...props}>
        <span onClick={this.toggle} className={link}>
          {open ? '⯆' : '⯈'} {label}
        </span>
        <span className={open ? visible : closed}>{children}</span>
      </span>
    )
  }
}

Reveal.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

export default Reveal
