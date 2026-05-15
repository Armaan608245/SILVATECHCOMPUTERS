import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Footer() {

  const navigate = useNavigate();

  return (

    <footer className="premium-footer">

      {/* TOP */}

      <div className="premium-footer-top">

        {/* BRAND */}

        <div className="premium-footer-col brand-col">

          <div className="footer-logo-wrap">

            <img
              src="/SILA TECH COMPUTERS.png"
              alt="Silva Tech"
              className="footer-logo"
            />

            <div>

              <h2>Silva Tech</h2>

              <span>
                PREMIUM TECH SOLUTIONS
              </span>

            </div>

          </div>

          <p className="footer-about">

            Silva Tech Computer provides
            premium IT solutions including
            desktops, laptops, networking,
            repairs, CCTV, printers and
            complete enterprise support.

          </p>

          {/* SOCIAL */}

          <div className="premium-footer-social">

            <a
              href="https://www.facebook.com/afroz.khan.58323431"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com/af_silvatechsupport"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/@SilvatechSupport"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>

            <a
              href="https://wa.me/919967863961"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* PRODUCTS */}

        <div className="premium-footer-col">

          <h3>Products</h3>

          <button
            onClick={() => navigate("/desktops")}
          >
            Desktops
          </button>

          <button
            onClick={() => navigate("/laptops")}
          >
            Laptops
          </button>

          <button
            onClick={() => navigate("/products/apple")}
          >
            Apple Products
          </button>

          <button
            onClick={() => navigate("/accessories")}
          >
            Accessories
          </button>

        </div>

        {/* SERVICES */}

        <div className="premium-footer-col">

          <h3>Services</h3>

          <button
            onClick={() => navigate("/services")}
          >
            Repairs
          </button>

          <button
            onClick={() => navigate("/services")}
          >
            Networking
          </button>

          <button
            onClick={() => navigate("/services")}
          >
            CCTV Solutions
          </button>

          <button
            onClick={() => navigate("/services")}
          >
            Data Recovery
          </button>

        </div>

        {/* CONTACT */}

        <div className="premium-footer-col">

          <h3>Contact</h3>

          <div className="footer-contact-item">

            <FaEnvelope />

            <span>
              silvatechc@gmail.com
            </span>

          </div>

          <div className="footer-contact-item">

            <FaPhoneAlt />

            <span>
              +91 9967863961
            </span>

          </div>

          <div className="footer-contact-item">

            <FaMapMarkerAlt />

            <span>
              Kailash Industrial Complex,
              Vikhroli West, Mumbai
            </span>

          </div>

          <button
            className="footer-contact-btn"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="premium-footer-bottom">

        <p>
          © 2026 Silva Tech Computer.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;