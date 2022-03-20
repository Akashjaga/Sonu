import React from 'react'
class Form extends React.Component{
    
    render (){
        return <div>
            <h1>Form Handler</h1> <hr/>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <form>
                            <div className='form-group'>
                                <input className='form-control' type='email' placeholder='Enter your Email'/>
                            </div>
                            <div className='form-group'>
                                <input className='form-control' type='password' placeholder='Enter Your Password'/>
                                </div>
                                <button className='btn btn-success'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
    }
}
export default Form