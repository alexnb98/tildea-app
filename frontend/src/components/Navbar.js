import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (

    <div style={{"background-color": "lightblue"}}>
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