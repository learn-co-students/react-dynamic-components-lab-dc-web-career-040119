import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      // const newValue = this.props.value * 2
      <div className="color-box" style={{opacity: this.props.opacity}}>
          {this.props.opacity >= 0.2 ? <Colorbox opacity={this.props.opacity - 0.1} /> : null}
      </div>
    )
  }

}
