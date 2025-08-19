import './TextBlock.css';

export default function TextBlock({ id, title, text }) {
    return (
        <section id="about" className="text-block container">
            <h2 className="text-block-title">Chi siamo</h2>
            <p className="text-block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsum debitis provident beatae? Adipisci minima nemo unde quae voluptas fugiat corporis eaque nulla totam ea qui alias quas, placeat eos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, unde, fugiat dolorem ducimus assumenda excepturi ad ipsum alias facilis maiores culpa architecto placeat praesentium, cum accusantium reprehenderit iste? Sit, assumenda!</p>
        </section>
    );
}
