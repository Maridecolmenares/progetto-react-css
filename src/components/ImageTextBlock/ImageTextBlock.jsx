import React from "react";
import './ImageTextBlock.css';
import premium_photo from './assets/images/premium_photo.avif';

const ImageTextBlock = () => {
    return (
        <section className="image-text-block container">
            <div className="image-container">
                <img src={premium_photo}
                    alt="Panorama del mare con onde leggere e orizzonte azzurro" />
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