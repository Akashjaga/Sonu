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
                            <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav> 
                    </div>
                </div>
            </div>
        </div>
        
    }
}
export default Data