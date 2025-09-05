import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";
import logo from "../../assets/images/logo-3.png";

function Footer() {
  const colRefs = useRef([]);
  const [visibleCols, setVisibleCols] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleCols((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.5 }
    );

    colRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-columns">
        <div
          ref={(el) => (colRefs.current[0] = el)}
          data-index="0"
          className={`footer-column fade-in-block ${visibleCols.includes(0) ? "visible" : ""}`}
        >
          <img src={logo} alt="Sabor del Mar Logo" className="footer-logo" />
          <h3 className="company-name">Sabor del Mar</h3>
          <p>Mexican seafood restaurant.</p>
        </div>

        <div
          ref={(el) => (colRefs.current[1] = el)}
          data-index="1"
          className={`footer-column fade-in-block ${visibleCols.includes(1) ? "visible" : ""}`}
        >
          <h4>Contact</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        <div
          ref={(el) => (colRefs.current[2] = el)}
          data-index="2"
          className={`footer-column fade-in-block ${visibleCols.includes(2) ? "visible" : ""}`}
        >
          <h4>Follow Us</h4>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div
        ref={(el) => (colRefs.current[3] = el)}
        data-index="3"
        className={`footer-copyright fade-in-block ${visibleCols.includes(3) ? "visible" : ""}`}
      >
        <p>© {new Date().getFullYear()} Sabor del Mar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
