import React, { useEffect, useState } from "react";
import API from "../../api/api"; // Axios instance
import "./Checkout.css";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // customer details
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  });

  // fetch cart from backend
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await API.get("/cart/"); // your DRF endpoint
        setCartItems(res.data || []);
      } catch (err) {
        console.error("Failed to fetch cart:", err);
        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  // total price & item count
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product_detail.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // WhatsApp order
  const handleWhatsAppOrder = () => {
    const adminNumber = "917995950354"; // ✅ replace with your admin WhatsApp number (with country code)
    const message = `
🛒 *New Order Placed!*

👤 *Customer Details*:
- Name: ${customer.name}
- Email: ${customer.email}
- Phone: ${customer.phone}
- Address: ${customer.address}
- Payment Method: ${customer.paymentMethod}

📦 *Order Items*:
${cartItems
        .map(
          (item, idx) => `#${idx + 1}
- Product: ${item.product_detail.name}
- Brand: ${item.product_detail.brand || "N/A"}
- SKU/ID: ${item.product_detail.id}
- Price: ₹${item.product_detail.price}
- Quantity: ${item.quantity}
- Subtotal: ₹${item.product_detail.price * item.quantity}
`
        )
        .join("\n")}

📊 *Summary*:
- Total Items: ${totalItems}
- Total Price: ₹${totalPrice}
    `;

    const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  if (loading) return <p>Loading checkout...</p>;

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      {/* Customer Info Form */}
      <div className="customer-form">
        <h3>Shipping & Billing Details</h3>
        <input
          type="text"
          placeholder="Full Name"
          value={customer.name}
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={customer.email}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          value={customer.phone}
          onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
        />
        <textarea
          placeholder="Shipping Address"
          value={customer.address}
          onChange={(e) =>
            setCustomer({ ...customer, address: e.target.value })
          }
        />

        <select
          value={customer.paymentMethod}
          onChange={(e) =>
            setCustomer({ ...customer, paymentMethod: e.target.value })
          }
        >
          <option>Cash on Delivery</option>
          <option>UPI</option>
          <option>Credit/Debit Card</option>
          <option>Net Banking</option>
        </select>
      </div>

      {/* Order Summary */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        {cartItems && cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <p>
                  <strong>{item.product_detail.name}</strong> (x{item.quantity})
                </p>
                <p>Brand: {item.product_detail.brand || "N/A"}</p>
                <p>SKU: {item.product_detail.id}</p>
                <p>Price: ₹{item.product_detail.price}</p>
                <p>Subtotal: ₹{item.product_detail.price * item.quantity}</p>
                <hr />
              </div>
            ))}
            <p>
              <strong>Total Items:</strong> {totalItems}
            </p>
            <p>
              <strong>Total Price:</strong> ₹{totalPrice}
            </p>

            <button onClick={handleWhatsAppOrder} className="btn-whatsapp">
              Place Order on WhatsApp
            </button>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
