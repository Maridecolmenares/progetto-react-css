import React from "react";
import "./CTABanner.css";

import banner1 from "../../assets/images/banner-3.png";
import banner2 from "../../assets/images/banner-4.png";

import banner1Mobile from "../../assets/images/banner-3-mobile.png";
import banner2Mobile from "../../assets/images/banner-4-mobile.png";

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="slider">
        <div className="slides">
          <div className="slide">
  <a href="#contact">
    <picture>
      <source srcSet={banner1Mobile} media="(max-width: 768px)" />
      <img src={banner1} alt="Banner 1" />
    </picture>
  </a>
</div>
<div className="slide">
  <a href="#contact">
    <picture>
      <source srcSet={banner2Mobile} media="(max-width: 768px)" />
      <img src={banner2} alt="Banner 2" />
    </picture>
  </a>
</div>

        </div>
      </div>
    </section>
  );
};

export default CTABanner;
