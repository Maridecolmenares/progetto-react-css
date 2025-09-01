import React from "react";
import "./CTABanner.css";

import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="slider">
        <div className="slides">
          <div className="slide">
            <a href="#contact"><img src={banner1} alt="Banner 1" /></a>
          </div>
          <div className="slide">
            <a href="#contact"><img src={banner2} alt="Banner 2" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
