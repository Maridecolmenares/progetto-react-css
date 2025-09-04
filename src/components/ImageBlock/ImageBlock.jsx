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
        <h2 className="image-block-title">About Our Restaurant</h2>
        <p className="image-block-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
}
