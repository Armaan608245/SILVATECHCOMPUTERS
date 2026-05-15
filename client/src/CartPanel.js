import React from "react";
import { useNavigate } from "react-router-dom";

function CartPanel({ cart, setCart, open, setOpen }) {

  const navigate = useNavigate();

  /* ✅ VERY IMPORTANT */
  if (!open) return null;

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const increaseQty = (id) => {

    setCart(prev =>
      prev.map(item =>
        item._id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {

    setCart(prev =>
      prev
        .map(item =>
          item._id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0)
    );
  };

  return (

    <div
      className="cart-overlay"
      onClick={() => setOpen(false)}
    >

      <div
        className="cart-panel"
        onClick={(e) => e.stopPropagation()}
      >

        {/* HEADER */}

        <div className="cart-header">

          <h2>Your Cart 🛒</h2>

          <button onClick={() => setOpen(false)}>
            ✕
          </button>

        </div>

        {/* ITEMS */}

        <div className="cart-items">

          {cart.length === 0 ? (

            <p className="empty-cart">
              Cart is empty ❌
            </p>

          ) : (

            cart.map(item => (

              <div
                key={item._id}
                className="cart-item"
              >

                <img
                  src={item.media?.[0]}
                  alt=""
                />

                <div className="cart-info">

                  <h4>{item.name}</h4>

                  <p>₹{item.price}</p>

                  <div className="qty-box">

                    <button
                      onClick={() => decreaseQty(item._id)}
                    >
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() => increaseQty(item._id)}
                    >
                      +
                    </button>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>

        {/* FOOTER */}

        <div className="cart-footer">

          <h3>Total: ₹{total}</h3>

          <button
            className="checkout-btn"
            onClick={() => {
              navigate("/checkout");
              setOpen(false);
            }}
          >
            Proceed to Checkout
          </button>

        </div>

      </div>

    </div>
  );
}

export default CartPanel;