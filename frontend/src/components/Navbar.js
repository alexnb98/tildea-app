import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => (

    <div>
      <ul>
        <li>
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
)

export default Navbar