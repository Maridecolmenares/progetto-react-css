import { useEffect, useRef, useState } from "react";
import "./TextBlock.css";
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';

export default function TextBlock() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="text-block">
      <div className="text-block-content">
        {/* Текст */}
        <div className="text-col">
          <h2 className={visible ? "show" : ""}>La nostra storia:<br /> una passione che nasce dal cuore</h2>
          <div className={`underline ${visible ? "show" : ""}`}></div>
          <p className={visible ? "show" : ""}>
            El Sabor del Mar nasce da un sogno condiviso: portare in tavola la vera cucina messicana, preparata con i frutti di mare freschi del Mediterraneo.
            Abbiamo unito la ricchezza delle tradizioni culinarie del Messico con l’autenticità degli ingredienti locali, per offrirti un’esperienza unica, piena di colori, profumi e sapori.
          </p>
          {/* <ul className="text-block-list">
  <li>Tacos di pesce e gamberi, ceviche e cocktails di mare preparati come in Messico</li>
  <li>Ingredienti freschi e genuini, lavorati ogni giorno con passione</li>
  <li>Un’atmosfera accogliente che ti farà sentire in viaggio dall’Italia al Messico</li>
</ul> */}

          <div className={`buttons ${visible ? "show" : ""}`}>
            <a href="#contact" className="btn contact">Prenota ora</a>
          </div>
        </div>

        {/* Галерея */}
        <div className="image-col">
          <div className={`gallery-item small ${visible ? "show" : ""}`}>
            <img src={img1} alt="Side 1" />
          </div>
          <div className={`gallery-item large ${visible ? "show" : ""}`}>
            <img src={img2} alt="Center" />
          </div>
          <div className={`gallery-item small ${visible ? "show" : ""}`}>
            <img src={img3} alt="Side 2" />
          </div>
        </div>
      </div>
    </section>
  );
}
