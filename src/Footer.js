import React from 'react'

export default function Footer () {
  return (
    <div>
      <p>
        <a href='https://soundcloud.com/autodrums' target='_blank' rel='noopener noreferrer'>@autodrums</a> on Soundcloud<br />
        <a href='https://github.com/tomasruud' target='_blank' rel='noopener noreferrer'>@tomasruud</a> on Github
      </p>

      <p>
        <a href='https://github.com/tomasruud/downcloud/issues' target='_blank' rel='noopener noreferrer'> Report issues </a><span role='img' aria-label='Bug'>🐛</span>
      </p>

      <p className='text-muted'>
        <span role='img' aria-label='Photo'>📸</span> by <a href='https://unsplash.com/photos/HU-uL54pfQI' target='_blank' rel='noopener noreferrer'>Juja Han on Unsplash</a>
      </p>
    </div>
  )
}
