import React from "react";
import { Link } from "react-router-dom"
import styles from './Navbar.module.css'

const Navbar = () => (
  <nav className={styles.Nav + " navbar navbar-expand-sm"}>
    <div className="container">
      <Link to="/" className="navbar-brand">Tildea</Link>
      <div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
              <Link className="nav-link btn btn-outline-primary mx-3" to="/dashboard">Login</Link>
              <Link className="nav-link btn btn-primary" to="/dashboard">Sign Up</Link>
          </ul>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar;