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
          <h2 className={visible ? "show" : ""}>Chi siamo</h2>
<div className={`underline ${visible ? "show" : ""}`}></div>
<p className={visible ? "show" : ""}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vehicula libero nec nunc volutpat, et gravida elit fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vehicula libero nec nunc volutpat, et gravida elit fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vehicula libero nec nunc volutpat, et gravida elit fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vehicula libero nec nunc volutpat, et gravida elit fermentum.
          </p>
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
