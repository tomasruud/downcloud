import React from 'react'

class Loader extends React.Component {
  state = {
    dots: '', 
    reverse: false
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.reverse) {
        const reverse = this.state.dots.length - 1 > 0
        const dots = this.state.dots.slice(0, this.state.dots.length - 1)
        this.setState({dots, reverse})
      } else {
        const reverse = this.state.dots.length + 1 >= 3
        const dots = this.state.dots + '.'
        this.setState({dots, reverse})
      }
    }, 200)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render () {
    return <span style={{display: 'inline-block'}}>{this.state.dots}</span>
  }
}

export default Loader
