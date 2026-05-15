import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const removeItem = (id) => {
    setCart(cart.filter(item => item._id !== id));
  };

  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item._id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item._id === id
        ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
        : item
    ));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={page}>

      <button onClick={() => navigate("/")} style={backBtn}>
        ← Back
      </button>

      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Your Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center", color: "#6b7280" }}>
          Cart is empty ❌
        </p>
      ) : (
        <div style={container}>

          {/* ITEMS */}
          <div style={itemsBox}>
            {cart.map((item) => (
              <div key={item._id} style={card}>

                <div>
                  <h3>{item.name}</h3>
                  <p style={{ color: "#6b7280" }}>₹{item.price}</p>

                  <div style={qtyBox}>
                    <button onClick={() => decreaseQty(item._id)} style={qtyBtn}>−</button>
                    <span style={{ margin: "0 10px" }}>{item.qty}</span>
                    <button onClick={() => increaseQty(item._id)} style={qtyBtn}>+</button>
                  </div>
                </div>

                <button onClick={() => removeItem(item._id)} style={removeBtn}>
                  Remove ❌
                </button>

              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div style={summary}>
            <h2>Total</h2>
            <h1 style={{ color: "#8b5e3c" }}>₹{total}</h1>

            <button
              onClick={() => navigate("/checkout")}
              style={checkoutBtn}
            >
              Proceed to Checkout 🧾
            </button>
          </div>

        </div>
      )}

    </div>
  );
}

/* 🎨 UPDATED UI (MATCH MAIN SITE) */

const page = {
  minHeight: "100vh",
  padding: "30px",
  background: "#ffffff",
  color: "#111827"
};

const backBtn = {
  padding: "8px 12px",
  borderRadius: "6px",
  border: "1px solid #8b5e3c",
  background: "#fff",
  color: "#8b5e3c",
  cursor: "pointer"
};

const container = {
  display: "flex",
  gap: "20px",
  marginTop: "20px",
  flexWrap: "wrap"
};

const itemsBox = {
  flex: 2,
  display: "flex",
  flexDirection: "column",
  gap: "15px"
};

const card = {
  background: "#ffffff",
  padding: "15px",
  borderRadius: "10px",
  border: "1px solid #e5e7eb",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const qtyBox = {
  display: "flex",
  alignItems: "center",
  marginTop: "5px"
};

const qtyBtn = {
  padding: "5px 10px",
  borderRadius: "5px",
  border: "none",
  background: "#8b5e3c",
  color: "#fff",
  cursor: "pointer"
};

const removeBtn = {
  background: "#ef4444",
  border: "none",
  padding: "8px 12px",
  borderRadius: "6px",
  color: "#fff",
  cursor: "pointer"
};

const summary = {
  flex: 1,
  minWidth: "250px",
  padding: "20px",
  borderRadius: "10px",
  background: "#ffffff",
  border: "1px solid #e5e7eb",
  textAlign: "center",
  height: "fit-content"
};

const checkoutBtn = {
  marginTop: "15px",
  width: "100%",
  padding: "12px",
  borderRadius: "6px",
  border: "none",
  background: "#8b5e3c",
  color: "#fff",
  fontSize: "16px",
  cursor: "pointer"
};

export default Cart;