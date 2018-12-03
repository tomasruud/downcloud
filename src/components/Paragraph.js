import PropTypes from 'prop-types'
import styled from 'styled-components'

const Paragraph = styled.p`
  margin: 0 0 1.2rem;
`

Paragraph.propTypes = {
  children: PropTypes.node.isRequired
}

export default Paragraph
