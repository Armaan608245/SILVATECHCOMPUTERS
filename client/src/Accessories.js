import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Accessories({ cart = [], setCart }) {

  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  /* ================= FETCH PRODUCTS ================= */

  useEffect(() => {

    axios
      .get("https://silvatechcomputers.onrender.com/products")

      .then((res) => {

        console.log("ALL PRODUCTS:", res.data);

        setProducts(res.data);
      })

      .catch((err) => console.log(err));

  }, []);

  /* ================= SAFE IMAGE ================= */

  const safeImage = (img) => {

    if (!img) {

      return "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200";
    }

    return img;
  };

  /* ================= CART ================= */

  const getQty = (id) => {

    const item = cart.find((i) => i._id === id);

    return item ? item.qty : 0;
  };

  const addToCart = (product) => {

    const exist = cart.find((i) => i._id === product._id);

    if (exist) {

      setCart(
        cart.map((i) =>
          i._id === product._id
            ? { ...i, qty: i.qty + 1 }
            : i
        )
      );

    } else {

      setCart([
        ...cart,
        { ...product, qty: 1 }
      ]);
    }

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2500);
  };

  const increase = (product) => {

    setCart(
      cart.map((i) =>
        i._id === product._id
          ? { ...i, qty: i.qty + 1 }
          : i
      )
    );
  };

  const decrease = (product) => {

    const item = cart.find((i) => i._id === product._id);

    if (item.qty === 1) {

      setCart(
        cart.filter((i) => i._id !== product._id)
      );

    } else {

      setCart(
        cart.map((i) =>
          i._id === product._id
            ? { ...i, qty: i.qty - 1 }
            : i
        )
      );
    }
  };

  /* ================= HELPERS ================= */

  const scrollToSection = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth"
      });
  };

  /* ================= FIXED CATEGORY CHECK ================= */

  const hasProducts = (subcategory) => {

    return products.some((p) => {

      const category =
        p.category?.toLowerCase().trim();

      const sub =
        p.subcategory?.toLowerCase().trim();

      return (
        category === "accessories" &&
        (
          sub === subcategory ||
          sub === "desktop-accessories" ||
          sub === "desktop-spares"
        )
      );
    });
  };

  /* ================= FIXED PRODUCT FILTER ================= */

  const renderProducts = (subcategory) => {

    return products

      .filter((p) => {

        const category =
          p.category?.toLowerCase().trim();

        const sub =
          p.subcategory?.toLowerCase().trim();

        return (
          category === "accessories" &&
          sub === subcategory
        );
      })

      .map((p) => (

        <div
          key={p._id}
          className="desktop-product-card"
        >

          {/* TOP TAG */}

          {p.isTopSeller && (
            <span className="desktop-top-tag">
              TOP SELLER
            </span>
          )}

          {/* COMING SOON */}

          {p.isComingSoon && (

            <span className="coming-tag">
              COMING SOON
            </span>

          )}

          {/* IMAGE */}

          <div className="desktop-product-image">

            <img
              src={safeImage(p.media?.[0])}
              alt={p.name}
              onClick={() =>
                navigate(`/product/${p._id}`)
              }
            />

          </div>

          {/* INFO */}

          <div className="desktop-product-info">

            <h3>{p.name}</h3>

            <p className="desktop-price">
              ₹ {Number(
                p.price || 0
              ).toLocaleString("en-IN")}
            </p>

            {/* BUTTONS */}

            <div className="desktop-btn-group">

              {p.isComingSoon ? (

                <button
                  className="view-modern-btn"
                  onClick={() =>
                    navigate(`/product/${p._id}`)
                  }
                >
                  View
                </button>

              ) : (

                <>

                  {getQty(p._id) > 0 ? (

                    <div className="desktop-qty-box">

                      <button
                        onClick={() => decrease(p)}
                      >
                        -
                      </button>

                      <span>
                        {getQty(p._id)}
                      </span>

                      <button
                        onClick={() => increase(p)}
                      >
                        +
                      </button>

                    </div>

                  ) : (

                    <button
                      className="desktop-add-btn"
                      onClick={() => addToCart(p)}
                    >
                      Add To Cart
                    </button>

                  )}

                  <button
                    className="desktop-view-btn"
                    onClick={() =>
                      navigate(`/product/${p._id}`)
                    }
                  >
                    View
                  </button>

                </>

              )}

            </div>

          </div>

        </div>

      ));
  };

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
            url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600")`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >

        <div className="desktop-overlay">

          <div className="desktop-hero-content">

            <span className="desktop-badge">
              PREMIUM ACCESSORIES COLLECTION
            </span>

            <h1>
              Computer <br />
              Accessories
            </h1>

            <p>
              Explore premium accessories,
              desktop spares, laptop spares
              and networking solutions.
            </p>

          </div>

        </div>

      </section>

      {/* BREADCRUMB */}

      <div className="desktop-breadcrumb">
        HOMEPAGE › ACCESSORIES
      </div>

      {/* CATEGORY MENU */}

      <section className="accessories-menu-section">

        <div className="accessories-menu">

          <div
            className="accessories-menu-item"
            onClick={() => scrollToSection("laptop")}
          >
            LAPTOP SPARES
          </div>

          <div
            className="accessories-menu-item"
            onClick={() => scrollToSection("desktop")}
          >
            DESKTOP SPARES
          </div>

          <div
            className="accessories-menu-item"
            onClick={() => navigate("/dslr")}
          >
            DSLRS
          </div>

          <div
            className="accessories-menu-item"
            onClick={() => navigate("/printers")}
          >
            PRINTERS
          </div>

          <div
            className="accessories-menu-item"
            onClick={() => navigate("/storage")}
          >
            STORAGE SOLUTIONS
          </div>

          <div
            className="accessories-menu-item"
            onClick={() => navigate("/scanners")}
          >
            SCANNERS
          </div>

          <div
            className="accessories-menu-item"
            onClick={() => navigate("/network-equipment")}
          >
            NETWORK EQUIPMENTS
          </div>

        </div>

      </section>

      {/* LAPTOP SPARES */}

      <section
        className="desktop-products-section"
        id="laptop"
      >

        <div className="desktop-title-wrap">

          <h2>Laptop Spares</h2>

        </div>

        <div className="desktop-product-grid">

          {renderProducts("laptop-spares")}

        </div>

      </section>

      {/* DESKTOP SPARES */}

      <section
        className="desktop-products-section"
        id="desktop"
      >

        <div className="desktop-title-wrap">

          <h2>Desktop Spares</h2>

        </div>

        <div className="desktop-product-grid">

          {renderProducts("desktop-accessories")}

          {renderProducts("desktop-spares")}

        </div>

      </section>

      {/* POPUP */}

      {showPopup && (

        <div className="desktop-cart-popup">

          <span>
            ✅ Product added to cart
          </span>

          <button
            onClick={() => navigate("/cart")}
          >
            View Cart →
          </button>

        </div>

      )}

      <Footer />

    </div>

  );
}

export default Accessories;