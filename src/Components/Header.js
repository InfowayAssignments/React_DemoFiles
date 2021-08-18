import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
          <ul className="navbar navbar-nav">
            <li className="nav-item">
              <NavLink to="/Home" className="nav-link" activeClassName="text-info bg-warning">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/About" className="nav-link" activeClassName="text-info bg-warning">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Contact" className="nav-link" activeClassName="text-info bg-warning">Contact</NavLink>
            </li>
          </ul>
        </nav>  
            </>
        )
    }
}
