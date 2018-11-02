import React from 'react'
import PropTypes from 'prop-types'
import styles from './Breadcrumbs.module.css'

const Breadcrumbs = ({items}) => (
  <ol className={styles.wrapper}>
    {!!items &&
      items.map((item, i) => (
        <li key={i} className={styles.item}>
          {item}
        </li>
      ))}
  </ol>
)

Breadcrumbs.propTypes = {
  items: PropTypes.array.isRequired
}

export default Breadcrumbs
