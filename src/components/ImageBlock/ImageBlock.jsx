// ImageBlock.jsx
import { useEffect, useRef } from "react";
import "./ImageBlock.css";
import blockImage from "../../assets/images/tacos-plate.jpeg";

export default function ImageBlock() {
  const contentRef = useRef(null);

  // поява заголовку та тексту
  useEffect(() => {
    const node = contentRef.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          node.classList.add("visible");
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section
      className="image-block"
      style={{ backgroundImage: `url(${blockImage})` }}
    >
      <div ref={contentRef} className="image-block-content fade-in">
        <h2 className="image-block-title">Ingredienti veri, freschi e selezionati</h2>
        <p className="image-block-text">
          Crediamo che la qualità nasca dalla scelta degli ingredienti. Per questo utilizziamo frutti di mare freschi del Mediterraneo, spezie profumate e la vera farina di mais messicana per preparare tortillas autentiche, come quelle di casa.
        </p>
      </div>
    </section>
  );
}
