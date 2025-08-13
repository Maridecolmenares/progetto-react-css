import "./ImageBlock.css";
import blockImage from "../../assets/images/image_block.jpg"; // картинка в папці assets

export default function ImageBlock() {
  return (
    <section className="image-block">
      <img
        src={blockImage}
        alt="La nostra azienda"
        className="responsive-image"
      />
    </section>
  );
}