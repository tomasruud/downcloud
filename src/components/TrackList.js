import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  margin-bottom: 0.5rem;

  ::before {
    content: '🎵';
    padding-right: 0.5rem;
  }
`

const TrackList = ({children}) => (
  <List>
    {React.Children.map(children, (e, i) => (
      <Item key={i}>{e}</Item>
    ))}
  </List>
)

TrackList.propTypes = {
  children: PropTypes.node
}

export default TrackList
