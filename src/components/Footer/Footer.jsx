import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-columns">
        <div className="footer-column">
          <h4>About Us</h4>
          <p>Information about the company or website.</p>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;