import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Item = styled.li`
  margin-block-end: 0.5rem;
`

const Button = styled.button`
  padding: 0.25rem 0;

  display: block;
  width: 100%;

  text-align: left;
  font-weight: bold;
  color: ${(props) => props.theme.primary};
  line-height: inherit;

  border: none;
  background-color: transparent;

  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.dark};
  }

  :active,
  :focus {
    outline-color: ${(props) => props.theme.gray};
  }
`

const Content = styled.div`
  padding: 0.25rem 0;

  display: ${(props) => (props.open ? 'block' : 'none')};
`

class AccordionItem extends React.Component {
  state = {
    open: this.props.open,
    rendered: this.props.open
  }

  toggle = () => {
    this.setState((previous) => ({open: !previous.open, rendered: true}))
  }

  render() {
    const {title, children} = this.props
    const {rendered, open} = this.state

    return (
      <Item>
        <Button onClick={this.toggle}>
          {title} {open ? '🔼' : '🔽'}
        </Button>
        <Content open={open}>{rendered && children}</Content>
      </Item>
    )
  }
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

AccordionItem.defaultProps = {
  open: false
}

export default AccordionItem
