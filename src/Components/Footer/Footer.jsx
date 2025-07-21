import React, { useState } from "react";
import "./Footer.css";
import footer_logo from "../../assets/Gold Luxury Initial Logo.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    // Simulating an API call (you can replace this with actual backend integration)
    setTimeout(() => {
      setMessage("Subscribed successfully!");
      setEmail(""); // Clear input field after submission
    }, 1000);
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" />
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="footer-subscribe" onClick={handleSubscribe}>
            Subscribe
          </div>
        </div>
      </div>
      {message && <p className="subscribe-message">{message}</p>}
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2023 Ananya Mishra. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
