import React, { useState } from "react";
import "./Checkout.css";
import Header from "../../components/Header/Header";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "cod",
    coupon: "",
  });

  const [cartItems] = useState([
    { id: 1, name: "Wireless Headphones", price: 2500, quantity: 1 },
    { id: 2, name: "Smart Watch", price: 4500, quantity: 2 },
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    // Later, integrate with Django backend via API
    console.log("Order Placed!", formData);
    alert("Order placed successfully!");
  };

  return (
    <div className="checkout-page">
      {/* ✅ Add Header at the top */}
      <Header />
    
    <div className="checkout-container">
      <div className="checkout-form">
        <h2 className="section-title">Shipping & Billing Details</h2>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              required
            ></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                required
              />
            </div>

            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state"
                required
              />
            </div>

            <div className="form-group">
              <label>Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Enter pincode"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Payment Method</label>
            <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
              <option value="cod">Cash on Delivery</option>
              <option value="upi">UPI</option>
              <option value="card">Credit/Debit Card</option>
            </select>
          </div>

          <div className="form-group coupon-box">
            <input
              type="text"
              name="coupon"
              value={formData.coupon}
              onChange={handleChange}
              placeholder="Enter coupon code"
            />
            <button type="button" className="apply-btn">Apply</button>
          </div>
        </form>
      </div>
      

      <div className="order-summary">
        <h2 className="section-title">Order Summary</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.name} × {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="total">
          <strong>Total: </strong>
          <span>₹{calculateTotal()}</span>
        </div>
        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
    </div>
  );
}
