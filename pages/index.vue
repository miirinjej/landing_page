<template>
  <div class="l-container">
    <header
      id="home"
      class="home main-header"
    >
      <div class="l-header">
        <div class="l-row">
          <figure class="home-figure">
            <img
              class="home-figure-image"
              src="/home/phone.png"
              alt="phone"
            >
          </figure>
          <div class="home-promo">
            <h1 class="home-promo-header">
              The Best App to Increase
              Your Productivity
            </h1>
            <p class="home-promo-description">
              A mobile app is a computer program designed to run on a
              mobile device such as a phone/tablet or watch.
            </p>
            <div class="home-promo-download">
              <button class="home-promo-download-button button">
                <span class="l-row">
                  <fa
                    class="home-promo-download-button-icon"
                    :icon="['fab', 'apple']"
                  />
                  <span class="home-promo-download-button-text">
                    Get It From
                    <span class="home-promo-download-button-text-store">
                      Appstore
                    </span>
                  </span>
                </span>
              </button>
              <button class="home-promo-download-button button">
                <span class="l-row">
                  <fa
                    class="home-promo-download-button-icon"
                    :icon="['fab', 'google-play']"
                  />
                  <span class="home-promo-download-button-text">
                    Get It From
                    <span class="home-promo-download-button-text-store">
                      Playstore
                    </span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section
      id="about"
      class="about"
    >
      <div class="l-content">
        <h2 class="about-header">
          About The App
        </h2>
        <p class="about-description">
          Writers and stars of Veep have responded incredulously to the news an Australian politician<br>
          required preinstalled stitches way email client, calendar, mapping program.
        </p>
        <div class="l-row">
          <div class="about-card">
            <div class="l-col">
              <figure class="about-card-figure">
                <div class="about-card-figure-rhombus"></div>
                <fa
                  class="about-card-figure-icon"
                  icon="headset"
                />
              </figure>
              <h3 class="about-card-header">
                24/7 Support
              </h3>
              <p class="about-card-description">
                Apps that are not preinstalled are usually available through distribution platforms called app stores.
              </p>
            </div>
          </div>
          <div class="about-card">
            <div class="l-col">
              <figure class="about-card-figure">
                <div class="about-card-figure-rhombus"></div>
                <fa
                  class="about-card-figure-icon"
                  icon="lock"
                />
              </figure>
              <h3 class="about-card-header">
                Data Privacy
              </h3>
              <p class="about-card-description">
                Apps that are not preinstalled are usually available through distribution platforms called app stores.
              </p>
            </div>
          </div>
          <div class="about-card">
            <div class="l-col">
              <figure class="about-card-figure">
                <div class="about-card-figure-rhombus"></div>
                <fa
                  class="about-card-figure-icon"
                  icon="download"
                />
              </figure>
              <h3 class="about-card-header">
                Easy Download
              </h3>
              <p class="about-card-description">
                Apps that are not preinstalled are usually available through distribution platforms called app stores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="features"
      class="features"
    >
      <div class="l-content">
        <h2 class="features-header">
          Features The App
        </h2>
        <p class="features-description">
          Writers and stars of Veep have responded incredulously to the news an Australian politician<br>
          required preinstalled stitches way email client, calendar, mapping program.
        </p>
        <div class="l-row">
          <figure class="features-figure">
            <img
              class="features-figure-image"
              src="/features/hero.png"
              alt="hero"
            >
          </figure>
          <ul class="features-list">
            <li class="features-list-item">
              <div class="l-row">
                <div class="features-list-item-circle">
                  <fa
                    class="features-list-item-circle-icon"
                    icon="layer-group"
                  />
                </div>
                <div>
                  <h3 class="features-list-item-header">
                    Creative design
                  </h3>
                  <p class="features-list-item-description">
                    Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara. Another
                    projects
                    managed with a easy design is what we stand for.incididunt ugt labore.
                  </p>
                </div>
              </div>
            </li>
            <li class="features-list-item">
              <div class="l-row">
                <div class="features-list-item-circle">
                  <fa
                    class="features-list-item-circle-icon"
                    icon="ellipsis-h"
                  />
                </div>
                <div>
                  <h3 class="features-list-item-header">
                    Unlimited features
                  </h3>
                  <p class="features-list-item-description">
                    Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara. Another
                    projects
                    managed with a easy design is what we stand for.incididunt ugt labore.
                  </p>
                </div>
              </div>
            </li>
            <li class="features-list-item">
              <div class="l-row">
                <div class="features-list-item-circle">
                  <fa
                    class="features-list-item-circle-icon"
                    :icon="['far', 'hand-point-up']"
                  />
                </div>
                <div>
                  <h3 class="features-list-item-header">
                    User friendly
                  </h3>
                  <p class="features-list-item-description">
                    Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara. Another
                    projects
                    managed with a easy design is what we stand for.incididunt ugt labore.
                  </p>
                </div>
              </div>
            </li>
            <li class="features-list-item">
              <div class="l-row">
                <div class="features-list-item-circle">
                  <fa
                    class="features-list-item-circle-icon"
                    icon="code"
                  />
                </div>
                <div>
                  <h3 class="features-list-item-header">
                    Clean codes
                  </h3>
                  <p class="features-list-item-description">
                    Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara. Another
                    projects
                    managed with a easy design is what we stand for.incididunt ugt labore.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section
      id="pricing"
      class="pricing"
    >
      <div class="l-content">
        <h2 class="pricing-header">
          Pricing Plan
        </h2>
        <p class="pricing-description">
          Writers and stars of Veep have responded incredulously to the news an Australian politician<br>
          required preinstalled stitches way email client, calendar, mapping program.
        </p>
        <div class="l-row">
          <div class="pricing-card">
            <div class="l-col">
              <h3 class="pricing-card-header">
                Basic
              </h3>
              <div class="pricing-card-cost">
                $00
              </div>
              <div class="pricing-card-access">
                Limited access
              </div>
              <ul class="pricing-card-list">
                <li class="pricing-card-list-item">
                  <fa
                    class="pricing-card-list-item-icon check-icon"
                    icon="check"
                  />100 MB Disk Space
                </li>
                <li class="pricing-card-list-item">
                  <fa
                    class="pricing-card-list-item-icon check-icon"
                    icon="check"
                  />2 Subdomains
                </li>
                <li class="pricing-card-list-item">
                  <fa
                    class="pricing-card-list-item-icon check-icon"
                    icon="check"
                  />5 Email Accounts
                </li>
                <li class="pricing-card-list-item">
                  <fa
                    class="pricing-card-list-item-icon times-icon"
                    icon="times"
                  />No License
                </li>
                <li class="pricing-card-list-item">
                  <fa
                    class="pricing-card-list-item-icon times-icon"
                    icon="times"
                  />Phone & Mail Support
                </li>
              </ul>
              <button class="pricing-card-purchase-button button">
                Purchase
              </button>
            </div>
          </div>
          <div class="pricing-card">
            <div class="l-col">
              <h3 class="pricing-card-header">
                Professional
              </h3>
              <div class="pricing-card-cost">
                $12
              </div>
              <div class="pricing-card-access">
                Limited access
              </div>
              <ul class="pricing-card-list">
                <li class="pricing-card-list-item">
                  <fa
                    class="pricing-card-list-item-icon check-icon"
                    icon="check"
                  />100 MB Disk Space
                </li>
                <li class="pricing-card-list-item">
                  <fa
                    class="pricing-card-list-item-icon check-icon"
                    icon="check"
                  />2 Subdomains
                </li>
                <li class="pricing-card-list-item">
                  <fa
                    class="pricing-card-list-item-icon check-icon"
                    icon="check"
                  />5 Email Accounts
                </li>
                <li class="pricing-card-list-item">
                  <fa
                    class="pricing-card-list-item-icon check-icon"
                    icon="check"
                  />No License
                </li>
                <li class="pricing-card-list-item">
                  <fa
                    class="pricing-card-list-item-icon times-icon"
                    icon="times"
                  />Phone & Mail Support
                </li>
              </ul>
              <button class="pricing-card-purchase-button button">
                Purchase
              </button>
            </div>
          </div>
          <div class="pricing-card">
            <div class="l-col">
              <h3 class="pricing-card-header">
                Business
              </h3>
              <div class="pricing-card-cost">
                $22
              </div>
              <div class="pricing-card-access">
                Limited access
              </div>
              <ul class="pricing-card-list">
                <li class="pricing-card-list-item">
                  <fa
                    class="pricing-card-list-item-icon check-icon"
                    icon="check"
                  />100 MB Disk Space
                </li>
                <li class="pricing-card-list-item">
                  <fa
                    class="pricing-card-list-item-icon check-icon"
                    icon="check"
                  />2 Subdomains
                </li>
                <li class="pricing-card-list-item">
                  <fa
                    class="pricing-card-list-item-icon check-icon"
                    icon="check"
                  />5 Email Accounts
                </li>
                <li class="pricing-card-list-item">
                  <fa
                    class="pricing-card-list-item-icon check-icon"
                    icon="check"
                  />No License
                </li>
                <li class="pricing-card-list-item">
                  <fa
                    class="pricing-card-list-item-icon check-icon"
                    icon="check"
                  />Phone & Mail Support
                </li>
              </ul>
              <button class="pricing-card-purchase-button button">
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="screenshot"
      class="screenshot"
    >
      <h2 class="screenshot-header">
        App Screenshots
      </h2>
      <p class="screenshot-description">
        Most such devices are sold with several apps bundled as pre-installed software,
        such as a web browser, email client, calendar, mapping program.
      </p>
      <carousel class="screenshot-carousel">
        <slide class="screenshot-carousel-slide">
          <figure class="screenshot-carousel-slide-figure">
            <img
              class="screenshot-carousel-slide-figure-image"
              src=""
              alt=""
            >
          </figure>
        </slide>
        <div class="screenshot-carousel-navigation">
          <button class="screenshot-carousel-navigation-previous-button"></button>
          <button class="screenshot-carousel-navigation-next-button"></button>
        </div>
      </carousel>
    </section>
    <section
      id="reviews"
      class="reviews"
    >
      <div class="l-content">
        <h2 class="reviews-header">
          Some Talk of Our Clients
        </h2>
        <carousel class="reviews-carousel">
          <slide class="reviews-carousel-slide">
            <div class="l-col">
              <figure class="reviews-carousel-slide-figure">
                <img
                  class="reviews-carousel-slide-figure-image"
                  src=""
                  alt=""
                >
              </figure>
              <div class="reviews-carousel-slide-name">
                Oliver Gomez
              </div>
              <div class="reviews-carousel-slide-position">
                CEO of google
              </div>
              <fa icon="" />
              <span class="reviews-carousel-slide-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores cum dolore earum est et excepturi, inventore maxime molestias nihil non praesentium quae, qui sed tempora veniam veritatis vero voluptatibus.
              </span>
              <fa icon="" />
            </div>
          </slide>
          <slide class="reviews-carousel-slide">
            <div class="l-col">
              <figure class="reviews-carousel-slide-figure">
                <img
                  class="reviews-carousel-slide-figure-image"
                  src=""
                  alt=""
                >
              </figure>
              <div class="reviews-carousel-slide-name">
                Rita Watson
              </div>
              <div class="reviews-carousel-slide-position">
                Web Designer
              </div>
              <fa icon="" />
              <span class="reviews-carousel-slide-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores cum dolore earum est et excepturi, inventore maxime molestias nihil non praesentium quae, qui sed tempora veniam veritatis vero voluptatibus.
              </span>
              <fa icon="" />
            </div>
          </slide>
        </carousel>
      </div>
    </section>
    <section
      id="contact"
      class="contact"
    >
      <div class="l-content">
        <h2 class="contact-header">
          Say Hello To Us!
        </h2>
        <p class="contact-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. et
          dolore magna aliqua.
        </p>
        <div class="l-row">
          <div class="contact-information">
            <div class="contact-information-section">
              <fa icon="" />
              <h3 class="contact-information-section-header">
                Location
              </h3>
              <span class="contact-information-section-text">
                Jurain, Dhaka Bangladesh
              </span>
            </div>
            <div class="contact-information-section">
              <fa icon="" />
              <h3 class="contact-information-section-header">
                Phone number
              </h3>
              <span class="contact-information-section-text">
                +1234321321
              </span>
            </div>
            <div class="contact-information-section">
              <fa icon="" />
              <h3 class="contact-information-section-header">
                Email
              </h3>
              <span class="contact-information-section-text">
                websitename@mail.com
              </span>
            </div>
          </div>
          <form
            action=""
            class="contact-form"
          >
            <input
              type="text"
              class="contact-form-name"
              placeholder="Name"
            >
            <input
              type="text"
              class="contact-form-email"
              placeholder="Email"
            >
            <input
              type="text"
              class="contact-form-message"
              placeholder="Your Message"
            >
            <button
              type="submit"
              class="contact-form-submit-button"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    <section class="map">
    </section>
    <footer class="main-footer">
      <div class="l-footer">
        <div class="l-row">
          <div class="main-footer-copyright">
            Copyright © 2018 UIXREX, All rights Reserved.
          </div>
          <ul class="main-footer-social-list">
            <li class="main-footer-social-list-item">
              <a
                class=""
                href=""
              >
                <fa icon="" />
              </a>
            </li>
            <li class="main-footer-social-list-item">
              <a
                class=""
                href=""
              >
                <fa icon="" />
              </a>
            </li>
            <li class="main-footer-social-list-item">
              <a
                class=""
                href=""
              >
                <fa icon="" />
              </a>
            </li>
            <li class="main-footer-social-list-item">
              <a
                class=""
                href=""
              >
                <fa icon="" />
              </a>
            </li>
            <li class="main-footer-social-list-item">
              <a
                class=""
                href=""
              >
                <fa icon="" />
              </a>
            </li>
            <li class="main-footer-social-list-item">
              <a
                class=""
                href=""
              >
                <fa icon="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    components: {
    },
  };
</script>

<style lang="scss">
  .home {
    margin-bottom: 2.1875rem;
    color: $content_secondary_color;
    background: $background_primary_color url("/background/home.svg") 0 0 no-repeat;
  }

  .home-figure {
    margin-top: 9.0625rem;

    /* dirty hack, because image layers is merged */
    margin-left: -6.5625rem;
  }

  .home-promo-header {
    font-size: $font_size_46;
    font-weight: 600;
  }

  .home-promo-download {
    margin-top: 5.3125rem;
  }

  .home-promo-download-button {
    width: 14.375rem;
    height: 5.0625rem;
    padding: 0 2.75rem;
    font-size: $font_size_13;
    color: $content_secondary_color;
    background: $download_button_background_color;
    border-radius: 2.5rem;
  }

  .home-promo-download-button:not(:last-of-type) {
    margin-right: 1.125rem;
  }

  .home-promo-download-button-icon {
    font-size: $font_size_32;
  }

  .home-promo-download-button-text {
    text-align: left;
    @extend %flex_column;
  }

  .home-promo-download-button-text-store {
    font-family: $font_montserrat;
    font-size: $font_size_19;
    font-weight: 600;
  }

  .about {
    margin-bottom: 5.625rem;
  }

  .about-header,
  .pricing-header,
  .screenshot-header {
    color: $header_primary_color;
  }

  .about-description {
    margin-bottom: 5.625rem;
  }

  .about-card {
    width: 22.375rem;
    padding: 3.4375rem 2rem 3.625rem 2rem;
    font-size: $font_size_16;
    line-height: 1.875;
    box-shadow: 1px 2px 1.25rem 1px rgba(34, 31, 31, 0.2);
  }

  .about-card-figure {
    position: relative;
    align-items: center;
    justify-content: center;
    width: 4.25rem;
    height: 4.25rem;
    margin-bottom: 2.625rem;
  }

  .about-card-figure-rhombus {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: $rhombus_background_primary_color;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .about-card-figure-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: $font_size_32;
    color: $icon_secondary_color;
    transform: translate(-50%, -50%);
  }

  .about-card-header {
    margin-bottom: 1.66666666666em;
  }

  .about-card:nth-of-type(2) {
    .about-card-figure-rhombus {
      background: $rhombus_background_secondary_color;
    }

    .about-card-figure-icon {
      color: $icon_primary_color;
    }

    .about-card-header {
      color: $content_tertiary_color;
    }
  }

  .features {
    padding-top: 5.5625rem;
    padding-bottom: 22.375rem;
    color: $content_secondary_color;
    background: $background_primary_color url("/background/features.svg") 0 0 no-repeat;
  }

  .features {
    .l-row {
      align-items: flex-start;
    }
  }

  .features-description {
    margin-bottom: 6.1875rem;
  }

  .features-list {
    text-align: left;
    @extend %list_style;
  }

  .features-list-item {
    line-height: 1.875;
  }

  .features-list-item:not(:last-of-type) {
    margin-bottom: 4.5rem;
  }

  .features-list-item-circle {
    position: relative;
    width: 4.875rem;
    height: 4.875rem;
    margin-right: 2.375rem;
    background: $circle_background_color;
    border-radius: 50%;
  }

  .features-list-item-circle-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: $font_size_36;
    color: $icon_secondary_color;
    transform: translate(-50%, -50%);
  }

  .features-list-item-header {
    margin-bottom: 1em;
    font-size: $font_size_20;
    color: $header_secondary_color;
    text-transform: uppercase;
  }

  .features-list-item-description {
    width: 34.625rem;
    font-size: $font_size_16;
  }

  .pricing {
    padding: 5.4375rem 0;
    background: $background_secondary_color;
  }

  .pricing-description {
    margin-bottom: 7.1875rem;
  }

  .pricing-card {
    width: 22.875rem;
    padding: 2.5625rem 0;
    border: 2px solid $pricing_card_border_color;
    border-radius: 1.25rem;
    box-shadow: 1px 2px 0.375rem 1px rgba(34, 31, 31, 0.24);
  }

  .pricing-card-header {
    margin-bottom: 1.5em;
    font-size: $font_size_24;
  }

  .pricing-card-cost {
    margin-bottom: 2.25rem;
    font-size: $font_size_36;
    line-height: 1;
    color: $content_tertiary_color;
  }

  .pricing-card-access {
    margin-bottom: 2.9375rem;
    font-size: $font_size_18;
    font-weight: 600;
    line-height: 1;
    color: $header_primary_color;
  }

  .pricing-card-list {
    margin-bottom: 2.1875rem;
    font-size: $font_size_14;
    line-height: 2.57142857142;
    @extend %list_style;
  }

  .pricing-card-list-item-icon {
    margin-right: 0.375rem;
  }

  .pricing-card-list-item-icon.check-icon {
    color: $available_option_primary_color;
  }

  .pricing-card-list-item-icon.times-icon {
    color: $unavailable_option_color;
  }

  .pricing-card-purchase-button {
    width: 12.8125rem;
    height: 3.4375rem;
    font-size: $font_size_18;
    font-weight: 500;
    color: $content_tertiary_color;
    text-transform: uppercase;
    background: $purchase_button_background_primary_color;
    border: 2px solid $purchase_button_border_primary_color;
  }

  .pricing-card:nth-of-type(2) {
    height: 38.6609375rem;
    padding: 4.35078125rem 0;
    color: $content_secondary_color;
    background: linear-gradient(to right, #1a62d8, #3a83f3);

    .pricing-card-header {
      color: $header_secondary_color;
    }

    .pricing-card-cost {
      color: $content_secondary_color;
    }

    .pricing-card-access {
      color: $content_secondary_color;
    }

    .pricing-card-list-item-icon.check-icon {
      color: $available_option_secondary_color;
    }

    .pricing-card-purchase-button {
      background: $purchase_button_background_secondary_color;
      border-color: $purchase_button_border_secondary_color;
    }
  }

  .contact-header {
    font-family: $font_raleway;
  }

  .main-footer-copyright {
    font-family: $font_montserrat;
  }
</style>
