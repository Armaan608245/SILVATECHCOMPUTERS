import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function DSLRS({ cart = [], setCart }) {

  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  /* ================= FETCH ================= */

  useEffect(() => {

    axios
      .get("http://localhost:5000/products")

      .then((res) => {
        console.log("ALL PRODUCTS:", res.data);
        setProducts(res.data);
      })

      .catch((err) => console.log(err));

  }, []);

  /* ================= FILTER ================= */

  const dslrProducts = products.filter((p) => {

    const category =
      String(p.category || "")
        .toLowerCase()
        .trim();

    const subcategory =
      String(p.subcategory || "")
        .toLowerCase()
        .trim();

    return (
      category === "accessories" &&
      (
        subcategory === "dslrs" ||
        subcategory === "dslr"
      )
    );
  });

  /* ================= CART ================= */

  const addToCart = (product) => {

    const exist = cart.find(
      (i) => i._id === product._id
    );

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

    alert("Added To Cart ✅");
  };

  return (

    <div className="desktop-page">

      {/* HERO */}

      <section
        className="desktop-hero"
        style={{
          background:
            `linear-gradient(
              rgba(0,0,0,0.7),
              rgba(0,0,0,0.6)
            ),
            url("https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600")`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >

        <div className="desktop-overlay">

          <div className="desktop-hero-content">

            <span className="desktop-badge">
              DSLR COLLECTION
            </span>

            <h1>
              DSLR Cameras
            </h1>

            <p>
              Professional DSLR cameras
              and photography accessories.
            </p>

          </div>

        </div>

      </section>

      {/* BREADCRUMB */}

      <div className="desktop-breadcrumb">
        HOMEPAGE › DSLRS
      </div>

      {/* PRODUCTS */}

      <section className="desktop-products-section">

        <div className="desktop-title-wrap">

          <h2>DSLR Products</h2>

        </div>

        <div className="desktop-product-grid">

          {dslrProducts.length > 0 ? (

            dslrProducts.map((p) => (

              <div
                key={p._id}
                className="desktop-product-card"
              >

                {/* TOP SELLER */}

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
                    src={
                      p.media?.[0] ||
                      "https://via.placeholder.com/300"
                    }
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

                        <button
                          className="desktop-add-btn"
                          onClick={() => addToCart(p)}
                        >
                          Add To Cart
                        </button>

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

            ))

          ) : (

            <h2
              style={{
                textAlign: "center",
                width: "100%",
                marginTop: "50px",
                color: "#111827"
              }}
            >
              No DSLR Products Found
            </h2>

          )}

        </div>

      </section>

      <Footer />

    </div>

  );
}

export default DSLRS;