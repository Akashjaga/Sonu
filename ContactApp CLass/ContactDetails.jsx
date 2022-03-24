import React, { Component } from 'react'
class ContactDetails extends Component {
  render() {
    return (
     <div>
      
     <h1>Contact Details</h1>    
     <pre>{JSON.stringify(this.props)}</pre>  
     <h3>Email : {this.props.contact.email}</h3>    
     
      </div>
      
    )
  }
}

export default ContactDetails
