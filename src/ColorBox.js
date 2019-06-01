
import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity -
        0.1} /> : null}
      </div>
    )
  }
}


// initial attempt

  // render() {
  //   const opacity = this.props.opacity;
  //   if (opacity > 0.2) {
  //     return (
  //       <div className="color-box">
  //       {opacity}
  //       </div>
  //       opacity - 0.1;
  //     )
  //   } else {
  //     return (
  //       null
  //     )
  //   }
  // }
