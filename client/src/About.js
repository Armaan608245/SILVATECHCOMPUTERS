import React from "react";
import Footer from "./Footer";

import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLaptop,
  FaNetworkWired,
  FaTools,
  FaShieldAlt
} from "react-icons/fa";

function About() {
  return (
    <div className="about-modern-page">

      {/* ================= HERO ================= */}

      <section className="about-modern-hero">

        <div className="about-overlay">

          <div className="about-hero-content">

            <span className="about-badge">
              ABOUT SILVA TECH COMPUTER
            </span>

            <h1>
              Trusted IT Solutions <br />
              For Modern Businesses
            </h1>

            <p>
              Reliable desktops, laptops, networking and
              IT support services for homes and businesses.
            </p>

          </div>

        </div>

      </section>

      {/* ================= BREADCRUMB ================= */}

      <div className="modern-breadcrumb">
        HOMEPAGE › ABOUT US
      </div>

      {/* ================= COMPANY ================= */}

      <section className="about-company-section">

        <div className="about-company-left">

          <span>WHO WE ARE</span>

          <h2>
            Complete IT Hardware <br />
            & Support Solutions
          </h2>

          <p>
            Silva Tech Computer is a trusted provider of desktops,
            laptops, printers and IT services across Mumbai.
          </p>

          <p>
            We help individuals, startups and businesses with
            reliable hardware, networking and technical support.
          </p>

        </div>

        <div className="about-company-right">

          <img
            src="/business.jpg"
            alt=""
          />

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="services-modern">

        <div className="service-modern-card">

          <FaLaptop className="service-icon" />

          <h3>Computer Sales</h3>

          <p>
            Premium desktops, laptops and accessories
            for gaming, office and personal use.
          </p>

        </div>

        <div className="service-modern-card">

          <FaTools className="service-icon" />

          <h3>Repair Services</h3>

          <p>
            Fast and reliable hardware & software
            troubleshooting and repairs.
          </p>

        </div>

        <div className="service-modern-card">

          <FaNetworkWired className="service-icon" />

          <h3>Networking</h3>

          <p>
            Office networking, router setup and
            enterprise connectivity solutions.
          </p>

        </div>

        <div className="service-modern-card">

          <FaShieldAlt className="service-icon" />

          <h3>AMC Support</h3>

          <p>
            Annual maintenance contracts and
            long-term technical support.
          </p>

        </div>

      </section>

      {/* ================= OWNER ================= */}

      <section className="owner-modern-section">

        <div className="owner-modern-card">

          <div className="owner-img-wrap">

            <img
              src="/image.jpeg"
              alt="Owner"
              className="owner-modern-img"
            />

          </div>

          <div className="owner-modern-content">

            <span className="owner-label">
              FOUNDER
            </span>

            <h2>AFROZ KHAN</h2>

            <p className="owner-role">
              Founder of Silva Tech Computer
            </p>

            <div className="owner-details">

              <p>
                <strong>University:</strong>
                {" "}K J Somaiya College of Engineering
              </p>

              <p>
                <strong>School:</strong>
                {" "}St Judes High School
              </p>

              <p>
                <strong>Expertise:</strong>
                {" "}IT Services, Networking & Hardware Support
              </p>

            </div>

            {/* SOCIAL */}

            <div className="social-modern">

              <a
                href="https://www.youtube.com/@SilvatechSupport"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>

              <a
                href="https://www.instagram.com/af_silvatechsupport"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/afroz.khan.58323431"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= LOCATION ================= */}

      <section className="location-modern">

        <div className="location-text">

          <span>OUR LOCATION</span>

          <h2>Visit Our Office</h2>

          <p>
            Unit No. 201, F-Wing, Kailash Industrial Complex,
            Vikhroli (West), Mumbai - 400079
          </p>

        </div>

        <div className="location-map">

          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Kailash%20Industrial%20Complex%20Vikhroli&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="350"
            style={{
              border: 0,
              borderRadius: "20px"
            }}
            loading="lazy"
          ></iframe>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default About;