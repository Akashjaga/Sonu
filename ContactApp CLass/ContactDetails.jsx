import React, { Component } from 'react'
class ContactDetails extends Component {
  render() {
    return (
      <>
      <pre>JSON.stringify(this.props.contact)</pre>
      <h1>Contact Details</h1>
      
      </>
    )
  }
}

export default ContactDetails