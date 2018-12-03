import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  color: ${props => props.theme.primary};
  font-weight: bold;
  text-decoration: none;

  background-color: transparent;
  border: 0;

  padding: 0;
  margin: 0;

  display: block;

  line-height: inherit;

  :hover {
    color: ${props => props.theme.dark};
    cursor: pointer;
  }

  :active,
  :focus {
    outline: 2px solid ${props => props.theme.gray};
  }
`

const Content = styled.span`
  display: ${props => (props.visible ? 'block' : 'none')};
`

class Reveal extends React.Component {
  state = {
    open: this.props.open,
    rendered: this.props.open
  }

  toggle = () => {
    this.setState(last => ({open: !last.open, rendered: true}))
  }

  render() {
    const {label, children, ...props} = this.props
    const {rendered, open} = this.state

    return (
      <span {...props}>
        <Button onClick={this.toggle}>
          {label} {open ? '🔼' : '🔽'}
        </Button>
        <Content visible={open}>{rendered && children}</Content>
      </span>
    )
  }
}

Reveal.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  open: PropTypes.bool
}

Reveal.defaultProps = {
  open: false
}

export default Reveal
