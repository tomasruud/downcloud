import React from 'react'
import PropTypes from 'prop-types'

import styles from './AccordionItem.module.css'

class AccordionItem extends React.Component {
  state = {
    open: false
  }

  toggle = () => {
    this.setState(previous => ({open: !previous.open}))
  }

  render() {
    const {title, children} = this.props
    const {open} = this.state
    
    return (
      <li className={styles.item}>
        <button 
          onClick={this.toggle} 
          className={styles.title}
        >{title} {open ? '🔼' : '🔽'}</button>
        <div 
          className={[
            styles.content, 
            open ? styles.visible : styles.hidden
          ].join(' ')}
        >{children}</div>
      </li>
    )
  }
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default AccordionItem
