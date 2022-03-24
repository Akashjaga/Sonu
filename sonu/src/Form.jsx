import React from 'react'
class Form extends React.Component{
    state = {
        email : "",
        password : ""
    }
    updateHandler = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    submitHandler = (event) => {
            event.preventDefault ()
            console.log(this.state);
        }
    render () {
        return <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-08 mt-08">
                        <form onSubmit={this.submitHandler}>
                            <div className='form-group'>
                                <input id='Email' name='email' onChange={this.updateHandler} className='form-control' placeholder='Enter Email ID'/>
                            </div>
                            <div className='form-group'>
                                <input id='password' name='password' onChange={this.updateHandler} className='form-control' placeholder='Enter Your Password'/>
                            </div>
                            <button className='btn btn-outline-primary' onSubmit={this.submitHandler}> submit</button>
                        </form>
                     </div>
                </div>
            </div>

        </div>
    }
}
export default Form