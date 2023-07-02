import React from "react";
import "../App.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container">
      <footer className="footer small text-black-50 fw-semibold">
        The Commonwealth © {currentYear}
      </footer>
    </div>
  );
}

export default Footer;
