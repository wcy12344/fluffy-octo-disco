import React, { Component } from 'react'

export default class Test extends Component {
    
  render() {
    const {name,age} = this.props.location.state|| {}
    return (
      <div>Test{name}{age}</div>
    )
  }
}
