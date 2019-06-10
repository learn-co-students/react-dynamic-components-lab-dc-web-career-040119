import React, { Component } from 'react'

export default class ColorBox extends Component {
  render () {
    const { opacity } = this.props
    if (opacity >= 0.2) {
      return (
        <div className="color-box" style={{ opacity: opacity }}>
          <ColorBox opacity={Number((opacity - 0.1).toFixed(1))} />
        </div>
      )
    } else {
      return null
    }
  }
}
