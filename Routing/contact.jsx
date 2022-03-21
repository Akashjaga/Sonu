import React, { Component } from "react";
class Contact extends Component {
  state = {
    fname : "",
    lname : "",
    address : "",    
    emailid : "",
    emailid : "",
    password : ""  
  }
  updateHandler = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }
  submitHandler = (event) => {
    event.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-08">          
        <form onSubmit={this.submitHandler}>
          
          <div className="form-group">
            <input className="form-control" onChange={this.updateHandler} name='fname' placeholder="Enter your  first name" type='text'/>
          </div>
          <div className="form-group">
            <input className="form-control" onChange={this.updateHandler} name='lname' placeholder="Enter your last name" type='text'/>
          </div>
          <div className="form-group">
            <input className="form-control" onChange={this.updateHandler} name='address' placeholder="Enter your adderess" type='text'/>
          </div>
          <div className="form-group">
            <input className="form-control" onChange={this.updateHandler} name='email' placeholder="Enter Email Id" type='email'/>
          </div>
                    <div className="form-group">
            <input className="form-control" onChange={this.updateHandler} name='password' placeholder="Enter your passowrd" type='password'/>
          </div>
          <button className="bg-success" onSubmit={this.submitHandler} > submit </button>
        </form>
        </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;