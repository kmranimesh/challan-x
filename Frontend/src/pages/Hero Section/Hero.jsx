function Hero() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="navbar__brand">
            <a href="http://localhost/Project_FoodPanda/">
              <img src="./assets/logo.png" alt="logo" className="brand__logo" />
            </a>
          </div>
          <div className="navbar__nav__items" />
          <div id="nav__btn">
            <ul className="menu">
              <li>
                <a href="aboutus.html">About Us</a>
              </li>
              <li>
                <a href="career.html">Careers</a>
              </li>
              <li>
                <a href="cities.html">Cities</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="nav__item">
            <a href="signup.html">
              <button className="button__primary hide__mobile">Sign Up</button>
            </a>
          </div>
        </nav>
      </header>
      {/*Hero Section*/}
      <main className="container">
        <section className="hero__container">
          <div className="hero__image__container">
            <img
              src="./assets/hero image.jpeg"
              alt="hero image"
              className="hero__image"
            />
            <img
              src="./assets/heroShape.svg"
              alt="hero image shape"
              className="hero__image__shape"
            />
            <img
              src="./assets/herobgpattren.svg"
              alt="hero image shape"
              className="hero__image__pattren"
            />
          </div>
          <div className="hero__description">
            <h1 className="hero__text">
              You can't download food but you can order from Food Panda.
            </h1>
            <a href="menu.html"></a>
            <button className="button__primary">
              <a href="menu.html" />
              <a
                href="menu.html"
                style={{ textDecoration: "none", color: "white" }}
              >
                Order Now
              </a>
            </button>
          </div>
        </section>
        {/*Video Container*/}
        <section className="video__footage__container">
          <div className="video__footage">
            <video
              src="./assets/advertise.mp4"
              autostart="false"
              className="chef__video"
              controls
            />
          </div>
          <div className="video__footage__text">
            <p>
              Can't cook, don't bother. Order food online from Food Panda.{" "}
              <br />
              Best cooks and best delivery guys, all at your service. <br />
              Awaiting your call for food!
            </p>
          </div>
        </section>
        {/*Explore Food Menu*/}
        <section className="food__list__container">
          <h1 className="text-xl">Explore our menu</h1>
          <div className="food__list__container__diagonal" />
          <div className="food__menu__card__list">
            {/*Burger*/}
            <div className="food__menu__card">
              <a href="#">
                <img
                  src="./assets/burger.jpg"
                  alt="burger"
                  className="food__menu__card__image"
                />
                <div className="food__menu__card__details">
                  <h4 className="text-lg">
                    <strong>Burgers</strong>
                  </h4>
                  <p>
                    Mcdonalds, Burger King, Burger Farm
                    <span style={{ color: "red" }}>+3</span>
                  </p>
                </div>
              </a>
            </div>
            <div className="food__menu__card food__menu__card__move__up">
              <a href="#">
                <img
                  src="./assets/pizza.jpg"
                  alt="pizza"
                  className="food__menu__card__image"
                />
                <div className="food__menu__card__details">
                  <h4 className="text-lg">
                    <strong>Pizza</strong>
                  </h4>
                  <p>
                    Domino's Pizza, Pizza Hut, Papa John's
                    <span style={{ color: "red" }}>+3</span>
                  </p>
                </div>
              </a>
            </div>
            <div className="food__menu__card">
              <a href="#">
                <img
                  src="./assets/icecream.jpg"
                  alt="iceCream"
                  className="food__menu__card__image"
                />
                <div className="food__menu__card__details">
                  <h4 className="text-lg">
                    <strong>Ice Creams</strong>
                  </h4>
                  <p>
                    Ibaco, Baskin Robins, Giani
                    <span style={{ color: "red" }}>+3</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="food__list__view__more">
            <a
              href="menu.html"
              style={{ textDecoration: "none", color: "black" }}
            >
              View More
            </a>
          </div>
        </section>
        <section className="restaurant__list__container">
          <div className="restaurant__list__text">
            <h4 className="text-xl">Convenience without compromise.</h4>
          </div>
          <div className="restaurant__list__images__container">
            <div className="restaurant__list__row_1">
              <div>
                <img
                  src="./assets/gridimage2.jpg"
                  alt="restaurant1"
                  className="restaurant1"
                />
              </div>
              <img
                src="./assets/gridimage1.jpg"
                alt="restaurant2"
                className="restaurant2"
              />
            </div>
            <div className="restaurant__list__row_2">
              <img
                src="./assets/gridimage4.jpg"
                alt="restaurant3"
                className="restaurant3"
              />
              <img
                src="./assets/gridimage3.jpg"
                alt="restaurant4"
                className="restaurant4"
              />
            </div>
          </div>
        </section>
        {/*Email*/}
        <section className="email__subcribe__container">
          <div>
            <h1 className="text-xl">Stay Updated</h1>
            <div className="email__subcribe__input__field">
              <div>
                <input
                  type="email"
                  placeholder="enter_mail_id@email.com"
                  className="email__input"
                />
              </div>
              <button className="button__primary">Get Updates</button>
              <a href="feedback.html">
                <button className="button__survey">Feedback Form</button>
              </a>
            </div>
          </div>
        </section>
        <section className="quote__container"></section>
      </main>
      <footer className="footanchor">
        <img src="./assets/logo.png" alt="logo" />
        <ul>
          <li>
            <a href="https://www.foodpanda.co.jp/en/contents/terms-and-conditions.htm">
              Terms &amp; Condition
            </a>
          </li>
          <li>
            <a href="https://www.foodpanda.co.jp/en/contents/privacy.htm">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://www.foodpanda.com/security/">Security</a>
          </li>
          <li>
            <a href="contact.html">Contact Us</a>
          </li>
        </ul>
      </footer>
      <div className="custom-shape-divider-top-1624884627">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          />
        </svg>
      </div>
    </div>
  );
}

export default Hero;
