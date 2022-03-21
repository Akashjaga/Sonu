import React, { Component } from 'react'
 class PropsB extends Component {
  render(props) {
    return (
      <div><h1>PropsB</h1>
      <h3>Name : {this.props.a}</h3>
      <h3>Age : {this.props.b}</h3>
      <h3>Salary : {this.props.c}</h3>
      </div>
    )
  }
}

export default PropsB