import "./footer.css";

export function Footer() {
  return (
    <footer className="o-footer">
      <div className="contact-info">
        <img
          src="/images/logo-white.svg"
          alt="Hunddle Logo"
          className="o-huddle-logo"
        />
        <div className="o-location o-flex">
          <img src="/images/icon-location.svg" alt="Location Icon" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="o-phone o-flex">
          <img src="/images/icon-phone.svg" alt="Location Icon" />
          <p>+1-543-123-4567</p>
        </div>
        <div className="o-email o-flex">
          <img src="/images/icon-email.svg" alt="Email Icon" />
          <p>example@huddle.com</p>
        </div>
      </div>
      <div>
        <ul className="o-info-links">
          <li>
            <a href="index.html">About Us</a>
          </li>
          <li>
            <a href="index.html">What We Do</a>
          </li>
          <li>
            <a href="index.html">FAQ</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="o-info-links">
          <li>
            <a href="index.html">Career</a>
          </li>
          <li>
            <a href="index.html">Blog</a>
          </li>
          <li>
            <a href="index.html">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="o-social-container">
        <div className="o-social-icons">
          <a className="icon-container" href="https://www.facebook.com/">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a className="icon-container" href="https://www.twitter.com/">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a className="icon-container" href="https://instagram.com/">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div>
          <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
