import { useState, useEffect, useRef } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 👇 для fade-in
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // один раз
        }
      },
      { threshold: 0.4 } // секція з’явиться, коли 40% видно
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Dati inviati:", formData);
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`fade-in-section ${isVisible ? "visible" : ""}`}
    >
      <h2 className="contact-title">Contattaci</h2>
      <p className="contact-subtitle">
        Hai domande o vuoi prenotare un tavolo? Scrivici!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Messaggio"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />
        <button className="btn-form" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Invio..." : "Invia"}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
