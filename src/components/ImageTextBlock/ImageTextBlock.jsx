import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ImageTextBlock.css";

// імпорти картинок
import dish1 from "../../assets/images/dish1.png";
import dish2 from "../../assets/images/dish2.png";
import dish3 from "../../assets/images/dish3.png";
import dish4 from "../../assets/images/dish4.png";
import dish5 from "../../assets/images/dish5.png";
import dish6 from "../../assets/images/dish-6.png";
import dish7 from "../../assets/images/dish7.jpg";

const dishes = [
  {
    id: 1,
    name: "Ceviche de pescado",
    desc: "Pesce bianco marinato con lime, cipolla rossa, coriandolo, pomodoro e avocado, servito con tostada di mais croccante.",
    price: "€14",
    img: dish1
  },
  {
    id: 2,
    name: "Ceviche de camaron",
    desc: "Gamberi freschi marinati al lime con avocado, cipolla rossa, coriandolo e pomodoro, accompagnati da tostada di mais croccante.",
    price: "€15",
    img: dish2
  },
  {
    id: 3,
    name: "Tacos de camaron",
    desc: "Tortillas di mais, gamberi croccanti fritti in pastella, insalata, guacamole, pico de gallo e salsa bianca.",
    price: "€12",
    img: dish3
  },
  {
    id: 4,
    name: "Tacos de pescado",
    desc: "Tortillas di mais ripiene di filetto di pesce fritto in pastella, guacamole, cavolo viola e salsa cremosa allo yogurt-lime.",
    price: "€11",
    img: dish4
  },
  {
    id: 5,
    name: "Tacos gobernador",
    desc: "Tacos con gamberi e formaggio fuso, peperoni e cipolla saltati in padella.",
    price: "€13",
    img: dish5
  },
  {
    id: 6,
    name: "Tacos de pulpo",
    desc: "Polpo grigliato, guacamole fresco e salsa a base di chipotle in tortilla di mais.",
    price: "€14",
    img: dish6
  },
  {
    id: 7,
    name: "Cocktail de marisco",
    desc: "Gamberi e verdure serviti in salsa rossa saporita di pomodoro piccante con lime.",
    price: "€16",
    img: dish7
  },
];


export default function ImageTextBlock() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          section.classList.add("visible");
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <section id="product" ref={sectionRef} className="cards-section fade-in-section">
      <h2 className="section-title">I nostri piatti</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1, centeredSlides: true },
          768: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {dishes.map((dish) => (
          <SwiperSlide key={dish.id}>
            {({ isActive }) => (
              <div className={`card ${isActive ? "active" : ""}`}>
                <div className="card-image-wrapper">
                  <img src={dish.img} alt={dish.name} />
                </div>
                <h3 className="card-title">{dish.name}</h3>
                <p className="card-desc">{dish.desc}</p>
                <div className="card-footer">
                  <span className="price">{dish.price}</span>
                  <a href="#contact" className="add-btn">+</a>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
