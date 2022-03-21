import React, { Component } from 'react'
import {Link} from "react-router-dom"
class Navigate extends Component {
  render() {
    return (
      <div className='navbar-collapse'>
          <nav className='navbar navbar-expand-lg bg-info'>
            <a className='navbar brand nav-link-active'> Navbar </a>
            <div>
                <ul className='navbar nav ml-auto'>
                    <li className='nav-item active'>
                        <Link className='navbar navbar-brand' to='./Form' > Form</Link>
                    </li>
                    <li className='nav-item active'>
                        <Link className='navbar navbar-brand' to='./Data' > Data</Link>
                    </li>

                </ul>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navigate