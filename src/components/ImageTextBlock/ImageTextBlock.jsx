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

const dishes = [
  {
    id: 1,
    name: "Paella",
    desc: "Riso, zafferano, gamberi e cozze.",
    price: "€12",
    img: dish1,
  },
  {
    id: 2,
    name: "Tacos",
    desc: "Carne, verdure fresche e salsa piccante.",
    price: "€8",
    img: dish2,
  },
  {
    id: 3,
    name: "Ceviche",
    desc: "Pesce fresco marinato con lime.",
    price: "€10",
    img: dish3,
  },
  {
    id: 4,
    name: "Gazpacho",
    desc: "Zuppa fredda di pomodoro e verdure.",
    price: "€7",
    img: dish4,
  },
  {
    id: 5,
    name: "Churros",
    desc: "Dolce fritto con zucchero e cioccolato.",
    price: "€6",
    img: dish5,
  },
];

export default function ImageTextBlock() {
  return (
    <section className="cards-section">
      <h2 className="section-title">I nostri piatti</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          0: {      // мобільні
            slidesPerView: 1,
            centeredSlides: true,
          },
          768: {    // планшети і вище
            slidesPerView: 3,
          }
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
