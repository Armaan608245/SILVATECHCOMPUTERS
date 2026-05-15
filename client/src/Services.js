import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Services() {

  const navigate = useNavigate();

  const services = [

    {
      title: "Repairs",
      desc: "Professional repair services for desktops, laptops and accessories.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
      path: "/repairs"
    },

    {
      title: "Rentals",
      desc: "Affordable computer and laptop rental solutions.",
      image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200",
      path: "/rentals"
    },

    {
      title: "Upgrades",
      desc: "Boost your PC performance with hardware upgrades.",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1200",
      path: "/upgrades"
    },

    {
      title: "Consultancy",
      desc: "Professional IT consultancy for homes and businesses.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200",
      path: "/consultancy"
    },

    {
      title: "Data Recovery",
      desc: "Recover deleted and damaged important files securely.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
      path: "/data-recovery"
    },

    {
      title: "Softwares",
      desc: "Original software installation and activation services.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200",
      path: "/softwares"
    }

  ];

  return (

    <div className="desktop-page">

      {/* HERO */}

      <section
        className="desktop-hero"
        style={{
          background:
            `linear-gradient(
              rgba(0,0,0,0.65),
              rgba(0,0,0,0.55)
            ),
            url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600")`
        }}
      >

        <div className="desktop-overlay">

          <div className="desktop-hero-content">

            <span className="desktop-badge">
              PREMIUM IT SERVICES
            </span>

            <h1>
              Professional <br />
              IT Solutions
            </h1>

            <p>
              Reliable repair, networking, consultancy,
              upgrades and software solutions.
            </p>

          </div>

        </div>

      </section>

      {/* BREADCRUMB */}

      <div className="desktop-breadcrumb">
        HOMEPAGE › SERVICES
      </div>

      {/* SERVICES */}

      <section className="desktop-products-section">

        <div className="desktop-title-wrap">

          <h2>Our Services</h2>

          <p>
            Explore premium IT support and computer solutions.
          </p>

        </div>

        <div className="desktop-product-grid">

          {services.map((service, index) => (

            <div
              key={index}
              className="desktop-product-card"
            >

              <div className="desktop-product-image">

                <img
                  src={service.image}
                  alt={service.title}
                />

              </div>

              <div className="desktop-product-info">

                <h3>{service.title}</h3>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: "1.7",
                    marginBottom: "25px"
                  }}
                >
                  {service.desc}
                </p>

                <button
                  className="desktop-add-btn"
                  onClick={() => navigate(service.path)}
                >
                  Explore Service
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </div>

  );
}

export default Services;