import './TextBlock.css';

export default function TextBlock({ id, title, text }) {
    return (
        <section id={id} className="text-block container">
            <h2 className="text-block-title">{title}</h2>
            <p className="text-block-text">{text}</p>
        </section>
    );
}
