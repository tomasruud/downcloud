import React from 'react'
import PropTypes from 'prop-types'
import flatten from 'flat'
import styles from './DataDisplay.module.css'

const DataDisplay = ({data}) => {
  const flat = flatten(data)

  return (
    <dl className={styles.list}>
      {Object.keys(flat).map(
        key =>
          !!flat[key] && (
            <React.Fragment key={key}>
              <dt className={styles.title}>{key}</dt>
              <dd className={styles.item}>{'' + flat[key]}</dd>
            </React.Fragment>
          )
      )}
    </dl>
  )
}

DataDisplay.propTypes = {
  data: PropTypes.object.isRequired
}

export default DataDisplay
