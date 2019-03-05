import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (

    <div style={{"backgroundColor": "lightblue"}}>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
)

export default Navbar;