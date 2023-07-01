import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1>Blog sencillo</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Crear post</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
