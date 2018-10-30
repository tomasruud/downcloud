import React from 'react'
import PropTypes from 'prop-types'

import styles from './Accordion.module.css'

const Accordion = ({children}) => (
  <ul className={styles.accordion}>{children}</ul>
)

Accordion.propTypes = {
  children: PropTypes.node.isRequired
}

export default Accordion
