import React from 'react'
import PropTypes from 'prop-types'

import {list, element} from './TrackList.module.css'
import TextButton from './TextButton';

const TrackList = ({tracks}) => (
  <ul className={list}>
    {!!tracks &&
      tracks.map((track, index) => (
        <li key={index} className={element}>
          <TextButton href={track.url}>{track.title}</TextButton>
        </li>
      ))}
  </ul>
)

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
}

export default TrackList
