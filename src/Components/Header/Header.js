import "./header.css";
import { Button } from "../Button/Button";

export function Header() {
  return (
    <header className="o-header">
      <nav className="o-navbar">
        <div>
          <img src="/images/logo.svg" alt="Huddle Logo" />
        </div>
        <div>
          <Button text="Try it Free" type />
        </div>
      </nav>
      <div className="o-hero">
        <div className="hero-text">
          <h1 className="hero-title">
            Build The Community Your Fans Will Love
          </h1>
          <p className="hero-paragraph">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <Button text="Get Started For Free" type={false} />
        </div>
        <div className="hero-img">
          <img src="/images/illustration-mockups.svg" alt="Mockups" />
        </div>
      </div>
    </header>
  );
}
