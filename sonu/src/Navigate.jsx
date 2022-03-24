import React, { Component } from 'react'
import {Link} from "react-router-dom"
class Navigate extends Component {
  render() {
    return (
      <div>
          <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
            <a className='navbar-item navbar-brand' href='tcs.com' > Navbar </a>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-item active'>
                        <Link className='navbar navbar-brand' to='./Form' > Form</Link>
                    </li>
                    <li className='nav-item active'>
                        <Link className='navbar navbar-brand' to='./Data' > Data</Link>
                    </li>
                    <li className='nav-item active'>
                        <Link className='navbar navbar-brand' to='./ContactApp' > Contact App</Link>
                    </li>

                </ul>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navigate