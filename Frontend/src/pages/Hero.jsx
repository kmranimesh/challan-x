import React from 'react'

function Hero() {
  return (
    <header>
    <nav class="navbar">
      <div class="navbar__brand">
        <a href="http://localhost/Project_FoodPanda/">
          <img src="./assets/logo.png" alt="logo" class="brand__logo" />
        </a>
      </div>
      <div class="navbar__nav__items"></div>
      <div id="nav__btn">
        <ul class="menu">
          <li><a href="aboutus.html">About Us</a></li>
          <li><a href="career.html">Careers</a></li>
          <li><a href="cities.html">Cities</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="nav__item">
        <a href="signup.html">
          <button class="button__primary hide__mobile">Sign Up</button>
        </a>
      </div>

    </nav>

  </header>

  <!--Hero Section-->
  <main class="container">
    <section class="hero__container">
      <div class="hero__image__container">
        <img src="./assets/hero image.jpeg" alt="hero image" class="hero__image" />
        <img src="./assets/heroShape.svg" alt="hero image shape" class="hero__image__shape" />
        <img src="./assets/herobgpattren.svg" alt="hero image shape" class="hero__image__pattren" />
      </div>
      <div class="hero__description">
        <h1 class="hero__text">
          You can't download food but you can order from Food Panda.
        </h1>
        <a href="menu.html">
          <button class="button__primary"><a href="menu.html" style="text-decoration: none;
            color: white;">Order Now</a></button>
        </a>
      </div>
    </section>
    <!--Video Container-->
    <section class="video__footage__container">
      <div class="video__footage">
        <video src="./assets/advertise.mp4" autostart="false" class="chef__video" controls></video>
      </div>
      <div class="video__footage__text">
        <p>
          Can't cook, don't bother. Order food online from Food Panda. <br />
          Best cooks and best delivery guys, all at your service. <br />
          Awaiting your call for food!
        </p>
      </div>
    </section>
    <!--Explore Food Menu-->
    <section class="food__list__container">
      <h1 class="text-xl">Explore our menu</h1>
      <div class="food__list__container__diagonal"></div>
      <div class="food__menu__card__list">
        <!--Burger-->

        <div class="food__menu__card">
          <a href="#">
            <img src="./assets/burger.jpg" alt="burger" class="food__menu__card__image" />
            <div class="food__menu__card__details">
              <h4 class="text-lg"><strong>Burgers</strong></h4>
              <p>
                Mcdonalds, Burger King, Burger Farm
                <span style="color: red">+3</span>
              </p>
            </div>
          </a>
        </div>

        <!--Pizza-->
        <div class="food__menu__card food__menu__card__move__up">
          <a href="#">
            <img src="./assets/pizza.jpg" alt="pizza" class="food__menu__card__image" />
            <div class="food__menu__card__details">
              <h4 class="text-lg"><strong>Pizza</strong></h4>
              <p>
                Domino's Pizza, Pizza Hut, Papa John's
                <span style="color: red">+3</span>
              </p>
            </div>
          </a>
        </div>
        <!--Ice Cream-->
        <div class="food__menu__card">
          <a href="#">
            <img src="./assets/icecream.jpg" alt="iceCream" class="food__menu__card__image" />
            <div class="food__menu__card__details">
              <h4 class="text-lg"><strong>Ice Creams</strong></h4>
              <p>
                Ibaco, Baskin Robins, Giani
                <span style="color: red">+3</span>
              </p>
            </div>
          </a>
        </div>
      </div>
      <div class="food__list__view__more"><a href="menu.html" style="text-decoration: none;
          color: black;">View More</a></div>
    </section>

    <!--Grid View Restaurant-->
    <section class="restaurant__list__container">
      <div class="restaurant__list__text">
        <h4 class="text-xl">Convenience without compromise.</h4>
      </div>
      <div class="restaurant__list__images__container">
        <div class="restaurant__list__row_1">
          <div>
            <img src="./assets/gridimage2.jpg" alt="restaurant1" class="restaurant1" />
          </div>
          <img src="./assets/gridimage1.jpg" alt="restaurant2" class="restaurant2" />
        </div>
        <div class="restaurant__list__row_2">
          <img src="./assets/gridimage4.jpg" alt="restaurant3" class="restaurant3" />
          <img src="./assets/gridimage3.jpg" alt="restaurant4" class="restaurant4" />
        </div>
      </div>
    </section>
    <!--Email-->
    <section class="email__subcribe__container">
      <div>
        <h1 class="text-xl">Stay Updated</h1>
        <div class="email__subcribe__input__field">
          <div>
            <input type="email" placeholder="enter_mail_id@email.com" class="email__input" />
          </div>
          <button class="button__primary">Get Updates</button>
          <a href="feedback.html">
            <button class="button__survey">Feedback Form</button>
          </a>
        </div>
      </div>
    </section>
    <!--Quote Container-->
    <section class="quote__container">

    </section>
  </main>

  <!--Footer Section-->
  <footer class="footanchor">
    <img src="./assets/logo.png" alt="logo" />
    <ul>
      <li><a href="https://www.foodpanda.co.jp/en/contents/terms-and-conditions.htm">Terms & Condition</a></li>
      <li><a href="https://www.foodpanda.co.jp/en/contents/privacy.htm">Privacy Policy</a></li>
      <li><a href="https://www.foodpanda.com/security/">Security</a></li>
      <li><a href="contact.html">Contact Us</a></li>
    </ul>
  </footer>
  <!--SVG Shape-->
  <div class="custom-shape-divider-top-1624884627">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="shape-fill"></path>
    </svg>
  </div>
  )
}

export default Hero