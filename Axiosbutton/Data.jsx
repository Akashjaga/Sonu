import React from 'react'
import Axios from 'axios'
class Data extends React.Component{
    state = {
        user : []
    }
    updateDataHandler =()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            this.setState({user:response.data})
        })
        .catch(()=>{})
    }
    render () {
        return <>
        <button onClick={this.updateDataHandler}>User Data</button>
        <div className="container">
            <div className="row">
                <div className="col-md-08">
                    <table className='table table-hover'>
                        <thead>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            </thead>
                            <tbody>
                                {this.state.user.map((user)=>{
                                    return (
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                        </table>
                </div>
            </div>
        </div>
        </>
    }
}
export default Data