import React, { Component } from 'react'
import Axios from 'axios'
 class Data extends Component {
     state = {
         users : []
     }
     updateUsersData = ( ) => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response.data);
            this.setState({users:response.data})
        })
        .catch(()=>{})
     }
  render() {
    return (
      <div>
          <h1> Users Data</h1>
          <button onClick={this.updateUsersData}> User Data</button>
          <div className="container">
              <div className="row">
                  <div className="com-md-06">
                      <table className='table table-hover'>
                            <thead>
                                <th>ID</th>
                                <th>Name</th>
                                <th>UserName</th>
                                <th>Email</th>
                            </thead>
                            <tbody>
                                {this.state.users.map((users)=>{
                                    return (
                                    <tr>
                                        <td>{users.id}</td>
                                        <td>{users.name}</td>
                                        <td>{users.username}</td>
                                        <td>{users.email}</td>
                                    </tr>
                                    )
                                })
                                }
                            </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Data