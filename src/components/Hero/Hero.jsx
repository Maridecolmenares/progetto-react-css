import { useEffect, useRef } from "react";
import "./Hero.css";
import heroImg from "../../assets/images/hero-5.png";

export default function Hero({
  title = "Il Messico che non ti aspetti, a due passi dal Mediterraneo",
  subtitle = "Benvenuti nel nostro ristorante: un viaggio di sapori che unisce la tradizione messicana e la freschezza dei frutti di mare del Mediterraneo."
}) {
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  // ПАРАЛАКС фону
  useEffect(() => {
  const handleScroll = () => {
    if (bgRef.current) {
      const rect = bgRef.current.parentElement.getBoundingClientRect();
      const offset = rect.top * 0.35; // коефіцієнт ефекту
      bgRef.current.style.transform = `translateY(${offset}px)`;
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  // ПОЕТАПНА поява контенту (h1 -> p -> btn)
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
  id="home"
  className="hero-section"
  style={{ backgroundImage: `url(${heroImg})` }}
>
  <div ref={contentRef} className="hero-content container fade-in">
    <h1 className="hero-title">{title}</h1>
    <p className="hero-subtitle">{subtitle}</p>
    <a href="#product" className="btn btn-hero">Scopri il menù</a>
  </div>
</section>

  );
}
