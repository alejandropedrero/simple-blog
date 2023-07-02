import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/f-logo.png";
import "../App.css";

function Navbar() {
  return (
    <div className="mb-3">
      <nav className="navbar navbar-expand-lg bg-body-tertiary h-25">
        <div className="container d-flex">
          <Link className="link-home text-decoration-none fw-bold" to="/">
            <div className="logo">
              <img className="logo" src={Logo} alt="" />
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mx-4"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item p-2">
                <Link className="link-home text-decoration-none fw-bold" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  className="link-home text-decoration-none fw-bold"
                  to="/new"
                >
                  Crear post
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
