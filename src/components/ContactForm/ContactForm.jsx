import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setTimeout(() => setIsSubmitting(false), 1500); // імітація відправки
  };

  return (
    <section id="contact">
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
