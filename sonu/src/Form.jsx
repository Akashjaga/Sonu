import React, { Component } from 'react'
class Form extends Component {
    state = {
        email : "",
        password : ""
    }
    updatehandler = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state);
    }
  render() {
    return (
      <div>
          <h2>Form Validation</h2>
          <div className="container">
              <div className="row">
                  <div className="com-md-06">
                      <form onSubmit={this.submitHandler}>
                          <div className='form-control'>
                              <input type='email' name='email' onChange={this.updatehandler} placeholder='enter your email ID' className='form-control' />
                          </div>
                          <div className='form-control'>
                              <input type='password' name= 'password' onChange={this.updatehandler} placeholder='enter your password' className='form-control' />
                          </div >
                          <button onSubmit={this.submitHandler}>Submit</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Form