import React from 'react'
class Form extends React.Component{
    state = {
        name : "",
        Dob : "",
        email : "",
        password : ""
    }
    updateHandler = (event) =>{
        this.setState({[event.target.name]:event.target.value})
    }
    submitHandler =(event)=> {
        event.preventDefault()
    }
    render () {
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-4">
                        <div className="card">
                            <div className="card-header bg-primary">
                               <h1>Login Details</h1>
                            </div>
                            <div className="card-body">
                            <form onClick={this.submitHandler}>
                                <div className='form-group'>
                                    
                            <input type='text' name="name" onChange={this.updateHandler} placeholder='Enter Name'  className='form-group'/> <br/>
                            <input type='date' name="Dob"  onChange={this.updateHandler} placeholder='Enter DOB' className='form-group'/> <br/>
                            <input type='email' name="email" onChange={this.updateHandler} placeholder='Enter Email' className='form-group' /> <br/>
                            <input type='password' name="password" onChange={this.updateHandler} placeholder='Enter Password' className='form-group'/> <br/>
                            <button className='btn btn-primary' >Login</button>
                            </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Form