import "../Button/button.css";

export function Button({ text, type }) {
  return (
    <button
      className={
        type ? "o-button o-button-bg-header" : "o-button o-button-bg-hero"
      }
      type="button"
    >
      {text}
    </button>
  );
}

export function Buttonaction({ text }) {
  return (
    <button className="o-button-main" type="button">
      {text}
    </button>
  );
}
