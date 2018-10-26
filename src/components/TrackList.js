import React from 'react'
import PropTypes from 'prop-types'

import {list, element} from './TrackList.module.css'

const TrackList = ({elements}) => (
  <ul className={list}>
    {elements.map((e, index) => (
      <li key={index} className={element}>
        {e}
      </li>
    ))}
  </ul>
)

TrackList.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default TrackList
