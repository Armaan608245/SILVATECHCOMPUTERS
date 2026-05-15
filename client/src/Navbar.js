import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (

    <nav className="premium-navbar">

      <div className="premium-navbar-container">

        {/* ================= LOGO ================= */}

        <div
          className="premium-navbar-logo"
          onClick={() => navigate("/")}
        >

          <div className="premium-logo-image">

            <img
              src="/logo.jpeg"
              alt="Silva Tech Computers"
            />

          </div>

          <div className="premium-logo-text">

            <h1>
              SILVA <span>TECH</span>
            </h1>

            <p>
              COMPUTER SOLUTIONS
            </p>

          </div>

        </div>

        {/* ================= NAV LINKS ================= */}

        <div className="premium-navbar-links">

          <span onClick={() => navigate("/desktops")}>
            Desktops
          </span>

          <span onClick={() => navigate("/laptops")}>
            Laptops
          </span>

          <span onClick={() => navigate("/products/apple")}>
            Apple
          </span>

          <span onClick={() => navigate("/accessories")}>
            Accessories
          </span>

          <span onClick={() => navigate("/services")}>
            Services
          </span>

          <span onClick={() => navigate("/about")}>
            About
          </span>

          <span onClick={() => navigate("/contact")}>
            Contact
          </span>

        </div>

        {/* ================= CART ================= */}

        <button
          className="premium-cart-btn"
          onClick={() => navigate("/cart")}
        >
          🛒 Cart
        </button>

      </div>

    </nav>

  );
}

export default Navbar;