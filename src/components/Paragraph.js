import React from 'react'
import styles from './Paragraph.module.css'

const Paragraph = ({children, ...props}) => (
  <p className={styles.paragraph} {...props}>
    {children}
  </p>
)

export default Paragraph
