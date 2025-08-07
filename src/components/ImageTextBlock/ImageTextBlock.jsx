import React from "react";
import './ImageTextBlock.css';

const ImageTextBlock = () => {
    const imageUrl = "https://picsum.photos/400/300";
    return (
        <section className="image-text-block container">
            <div className="image-container">
                <img src={imageUrl}
                    alt="Esempio" />
            </div>
            <div className="text-container">
                <h2>Titolo del blocco</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis mollitia vero voluptatibus? Odit, neque a repudiandae eos dolor enim voluptatum. Error alias dolorum veritatis a nemo, accusamus voluptate tempore recusandae.
                </p>
            </div>
        </section>
    );
}

export default ImageTextBlock;