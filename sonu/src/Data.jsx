import React from 'react'
import Axios from 'axios'
class Data extends React.Component{
    state = {
        user : []
    }
    componentDidMount = () => {
        Axios.get ('https://jsonplaceholder.typicode.com/users')
        .then ((response)=>{
            this.setState({user:response.data})
        })
        .catch ((err)=>{
            console.log(err);
        })
    }
    render (){
        return <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-06">
                        <table className='table table-hover'>
                            <thead>
                            <th>ID</th>
                            <th>USER</th>
                            <th>EMAIL</th>
                            </thead>
                        <tbody>
                            {this.state.user.map ((user)=>{
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
        </div>
    }
}
export default Data