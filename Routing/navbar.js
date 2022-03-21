import {Link} from "react-router-dom"
import React from 'react'
class Navbar extends React.Component{
    render ( ) {
        return  <div>
            <nav className='navbar navbar-expand-lg bg-light'>
                <a href='tcs.com' className='navbar-brand nav-link-disabled' > Navbar</a>
                <div className="navbar-collapse" >
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link  to="/Home" className='navbar navbar-brand'>Home </Link>
      </li>
      <li className="nav-item active">
        <Link  to="./Services" className='navbar navbar-brand' >Services </Link>
      </li>
      <li className="nav-item active">
        <Link  to='./contact'  className='navbar navbar-brand' >Contacts </Link>
      </li>
      </ul>
      </div>
            </nav>
            </div>
    }
}
export default Navbar