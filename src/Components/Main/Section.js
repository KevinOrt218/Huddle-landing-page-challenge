import "./section.css";
import { Buttonaction } from "../Button/Button";

export function Section({ title, paragraph, invert, img }) {
  return (
    <article className={invert ? "o-article o-article-invert" : "o-article"}>
      <div className="o-info-container">
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
      <div className="o-img-container">
        <img className="o-img" src={img} alt="-Conversation Illustration" />
      </div>
    </article>
  );
}

export function Calltoaction() {
  return (
    <div className="calltoact-info">
      <h2>Ready to Build Your Community?</h2>
      <Buttonaction text={"Get Started For Free"} />
    </div>
  );
}
