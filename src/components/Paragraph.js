import React from 'react'
import PropTypes from 'prop-types'
import styles from './Paragraph.module.css'

const Paragraph = ({children, ...props}) => (
  <p className={styles.paragraph} {...props}>
    {children}
  </p>
)

Paragraph.propTypes = {
  children: PropTypes.node.isRequired
}

export default Paragraph
