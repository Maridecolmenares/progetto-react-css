import React from "react";
import './CTABanner.css';

const CTABanner= () => {
    return(
        <section className="cta-banner">
             <h2>Contattaci per maggiori informazioni</h2>
      <p>Non perdere l'occasione di lavorare con noi per il tuo prossimo evento!</p>
      <a href="#contact" className="btn btn-secondary">Contattaci</a>
        </section>
    );
}
export default CTABanner;