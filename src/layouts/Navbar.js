import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
  return (
    <nav className="nav">
      <Link className="navbar_links" to="/">
        Home
      </Link>
      <Link className="navbar_links" to="/add_page">Add Page</Link>
    </nav>
  );
};

export default Navbar;