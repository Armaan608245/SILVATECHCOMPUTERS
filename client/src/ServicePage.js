import React, { useState } from "react";
import Footer from "./Footer";

function ServicePage({ title, description }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState("");

  const handleSubmit = () => {

    if (!name || !phone) {

      alert("Please fill required fields");
      return;
    }

    const message = `Hello Silva Tech Computer,

Service: ${title}

Name: ${name}
Email: ${email}
Phone: ${phone}
Requirement: ${requirement}`;

    const phoneNumber = "919967863961";

    const url =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = url;
  };

  return (

    <div className="service-page">

      {/* HERO */}

      <section className="desktop-hero">

        <div className="desktop-overlay">

          <div className="desktop-hero-content">

            <span className="desktop-badge">
              PREMIUM IT SERVICES
            </span>

            <h1>
              {title}
            </h1>

            <p>
              {description}
            </p>

          </div>

        </div>

      </section>

      {/* BREADCRUMB */}

      <div className="desktop-breadcrumb">
        HOMEPAGE › {title.toUpperCase()}
      </div>

      {/* FEATURES */}

      <section className="service-features">

        <div className="service-feature-card">

          <h3>Expert Technicians</h3>

          <p>
            Experienced professionals for reliable service support.
          </p>

        </div>

        <div className="service-feature-card">

          <h3>Fast Support</h3>

          <p>
            Quick diagnosis and fast turnaround for all services.
          </p>

        </div>

        <div className="service-feature-card">

          <h3>Affordable Pricing</h3>

          <p>
            Transparent pricing with premium quality support.
          </p>

        </div>

      </section>

      {/* FORM */}

      <section className="service-form-section">

        <div className="service-form-title">

          <h2>
            Get A Quote
          </h2>

          <p>
            Contact us today for premium IT support.
          </p>

        </div>

        <div className="service-form-box">

          <div className="service-form-row">

            <input
              type="text"
              placeholder="Your Name *"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>

          <div className="service-form-row">

            <input
              type="text"
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
            />

          </div>

          <textarea
            placeholder="Describe your requirement..."
            value={requirement}
            onChange={(e) =>
              setRequirement(e.target.value)
            }
          ></textarea>

          <button onClick={handleSubmit}>
            Submit Request
          </button>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default ServicePage;