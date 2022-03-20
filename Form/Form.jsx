import React from 'react'
class Form extends React.Component{
    state = {
        name : "",
        dob : "",
        email : "",
        password : ""
    }
    updateHandler = (event) => {
        this.setState({[event.target.name] :event.target.value})
    }
    submitHandler =(event)=>{
        event.preventDefault();
        console.log(this.state);
    }
    render () {
        return <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={this.submitHandler}>
                            <div className='form-group'>
                            <label> Name</label>
                                <input type='text' name='name' onChange={this.updateHandler} className="form-control" placeholder='Enter your Full Name' />
                            </div>
                            <div className='form-group'>
                                <label> DOB</label>
                                <input type='date' name='dob' onChange={this.updateHandler} className='form-control' />
                            </div>
                            <div className='form-group'>
                            <label> Email</label>
                                <input type='email' name='email' onChange={this.updateHandler} className='form-control' placeholder='Enter your Email ID'/>
                            </div>
                            <div className='form-group'>
                            <label> Password</label>
                                <input type='password'name='password' onChange={this.updateHandler} className='form-control' placeholder='Enter Your Password'/>
                            </div>
                            <div className='form-group' >
                                <input className='form-control btn-warning' onChange={this.submitHandler} type='submit'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Form