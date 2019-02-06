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
        Most such devices are sold with several apps bundled as pre-installed software,<br>
        such as a web browser, email client, calendar, mapping program.
      </p>
      <no-ssr placeholder="Loading...">
        <carousel
          ref="screenshotsCarousel"
          class="screenshot-carousel"
          :per-page-custom="[[1920, 5]]"
          :autoplay="true"
          :autoplay-timeout="5000"
          :loop="true"
          :pagination-enabled="false"
        >
          <slide
            v-for="(screenshot, index) in screenshots"
            :key="index"
            class="screenshot-carousel-slide"
          >
            <figure class="screenshot-carousel-slide-figure">
              <img
                class="screenshot-carousel-slide-figure-image"
                :src="screenshot.url"
                :alt="screenshot.name"
              >
            </figure>
          </slide>
        </carousel>
        <div class="screenshot-carousel-navigation">
          <button
            class="screenshot-carousel-navigation-button circle-button"
            @click="slideScreenshotsCarousel('prev')"
          >
            <fa
              class="screenshot-carousel-navigation-button-icon"
              icon="long-arrow-alt-left"
            />
          </button>
          <button
            class="screenshot-carousel-navigation-button circle-button"
            @click="slideScreenshotsCarousel('next')"
          >
            <fa
              class="screenshot-carousel-navigation-button-icon"
              icon="long-arrow-alt-right"
            />
          </button>
        </div>
      </no-ssr>
    </section>
    <section
      id="reviews"
      class="reviews"
    >
      <div class="l-content">
        <h2 class="reviews-header">
          Some Talk of Our Clients
        </h2>
        <carousel
          ref="reviewsCarousel"
          class="reviews-carousel"
          :per-page-custom="[[1920, 2]]"
          :loop="true"
          :pagination-enabled="true"
          :space-padding="0"
          :pagination-active-color="'#cbd9f1'"
          :pagination-color="'#90b4ee'"
          :pagination-padding="6"
          :pagination-size="15"
        >
          <slide
            v-for="(review, index) in reviews"
            :key="index"
            class="reviews-carousel-slide"
          >
            <div class="reviews-carousel-slide-content">
              <figure class="reviews-carousel-slide-content-figure">
                <img
                  class="reviews-carousel-slide-content-figure-image"
                  :src="review.imageUrl"
                  :alt="review.author"
                >
              </figure>
              <div class="reviews-carousel-slide-content-name">
                {{ review.author }}
              </div>
              <div class="reviews-carousel-slide-content-position">
                {{ review.position }}
              </div>
              <div class="l-row">
                <fa
                  class="reviews-carousel-slide-content-icon quote-left-icon"
                  icon="quote-left"
                />
                <span class="reviews-carousel-slide-content-text">
                  {{ review.reviewText }}
                  <fa
                    class="reviews-carousel-slide-content-icon quote-right-icon"
                    icon="quote-right"
                  />
                </span>
              </div>
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br> tempor incididunt ut labore. et
          dolore magna aliqua.
        </p>
        <div class="l-row">
          <div class="contact-information js-contact-information">
            <div class="contact-information-section">
              <div class="l-row">
                <fa
                  class="contact-information-section-icon"
                  icon="map"
                />
                <div>
                  <h3 class="contact-information-section-header">
                    Location:
                  </h3>
                  <span class="contact-information-section-text">
                    Jurain, Dhaka Bangladesh
                  </span>
                </div>
              </div>
            </div>
            <div class="contact-information-section">
              <div class="l-row">
                <fa
                  class="contact-information-section-icon"
                  icon="phone"
                />
                <div>
                  <h3 class="contact-information-section-header">
                    Phone number:
                  </h3>
                  <span class="contact-information-section-text">
                    +1234321321
                  </span>
                </div>
              </div>
            </div>
            <div class="contact-information-section">
              <div class="l-row">
                <fa
                  class="contact-information-section-icon"
                  icon="envelope"
                />
                <div>
                  <h3 class="contact-information-section-header">
                    Email:
                  </h3>
                  <span class="contact-information-section-text">
                    websitename@mail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
          <form
            action=""
            name="contact-form"
            class="contact-form"
          >
            <input
              type="text"
              class="contact-form-name js-contact-form-input"
              placeholder="Name"
            >
            <input
              type="text"
              class="contact-form-email js-contact-form-input"
              placeholder="Email"
            >
            <textarea
              class="contact-form-message"
              placeholder="Your Message"
              :style="{ height: contactFormMessageHeight + 'px' }"
            ></textarea>
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
    data() {
      return {
        screenshots: [
          { name: 'workout', url: '/screenshot/workout.png' },
          { name: 'story', url: '/screenshot/story.png' },
          { name: 'map', url: '/screenshot/map.png' },
          { name: 'music player', url: '/screenshot/music_player.png' },
          { name: 'login', url: '/screenshot/login.png' },
          { name: 'story 2', url: '/screenshot/story_2.png' },
          { name: 'map 2', url: '/screenshot/map_2.png' },
        ],
        reviews: [
          {
            imageUrl: '/reviews/james_santana.png',
            author: 'James Santana',
            position: 'Web Developer',
            reviewText:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, good.',
          },
          {
            imageUrl: '/reviews/julia_green.png',
            author: 'Julia Green',
            position: 'Web Designer',
            reviewText:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, good.',
          },
          {
            imageUrl: '/reviews/oliver_gomez.png',
            author: 'Oliver Gomez',
            position: 'CEO of google',
            reviewText:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, good.',
          },
          {
            imageUrl: '/reviews/rita_watson.png',
            author: 'Rita Watson',
            position: 'Web Designer',
            reviewText:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, good.',
          },
          {
            imageUrl: '/reviews/monica_flower.png',
            author: 'Monica Flower',
            position: 'Marketer',
            reviewText:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, good.',
          },
          {
            imageUrl: '/reviews/sarah_april.png',
            author: 'Sarah April',
            position: 'IT manager',
            reviewText:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, good.',
          },
        ],
        contactFormMessageHeight: 0,
      };
    },
    mounted() {
      const contactInformationHeight = document.querySelector('.js-contact-information').offsetHeight;
      const contactFormInputs = document.querySelectorAll('.js-contact-form-input');
      const contactFormInputHeight = contactFormInputs[0].offsetHeight;
      const contactFormInputMarginBottom = window.getComputedStyle(contactFormInputs[0], null).getPropertyValue('margin-bottom').match(/^\d+/);

      this.contactFormMessageHeight = contactInformationHeight - (contactFormInputHeight * contactFormInputs.length
        + contactFormInputMarginBottom * contactFormInputs.length);
    },
    methods: {
      slideScreenshotsCarousel(value) {
        const carousel = this.$refs.screenshotsCarousel;
        const currentPage = carousel.currentPage;
        const pageCount = carousel.pageCount;

        if (value === 'prev') {
          currentPage !== 0 ? carousel.goToPage(currentPage - 1) : carousel.goToPage(pageCount - 1);
        } else {
          currentPage < pageCount - 1 ? carousel.goToPage(currentPage + 1) : carousel.goToPage(0);
        }
      },
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

  .home-promo {
    width: 37.5rem;
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
    margin-bottom: 2.5rem;
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
    margin-bottom: 1.25rem;
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
    margin-bottom: 2.25rem;
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
    background: linear-gradient(to right, $color_denim, $color_dodger_blue_primary);

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

  .screenshot {
    padding-top: 4.75rem;
    padding-bottom: 5.625rem;
  }

  .screenshot-description {
    margin-bottom: 5.625rem;
  }

  .screenshot-carousel {
    margin-bottom: 3.0625rem;
  }

  .screenshot-carousel-navigation-button {
    font-size: $font_size_28;
    color: $icon_primary_color;
    background: $navigation_button_background_color;
  }

  .screenshot-carousel-navigation-button:first-child {
    margin-right: 3.3125rem;
  }

  .reviews {
    padding: 5.625rem 0 5.375rem 0;
    margin-bottom: 5.625rem;
    color: $content_secondary_color;
    background-image: linear-gradient(-110deg, $color_dodger_blue_primary, $color_denim);
  }

  .reviews-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .reviews-carousel-slide {
    justify-content: flex-end;
    height: 21.9375rem;
    @extend %flex_column;
  }

  .reviews-carousel-slide:nth-child(even) {
    margin-left: 1.25rem;
  }

  .reviews-carousel-slide:nth-child(2n+3) {
    margin-left: -1.25rem;
  }

  .reviews-carousel-slide-content {
    position: relative;
    align-items: center;
    width: 35rem;
    height: 17.3125rem;
    padding: 3rem 4.6875rem 2.3125rem 4.6875rem;
    border: 1px solid $reviews_slide_border_color;
    @extend %flex_column;
  }

  .reviews-carousel-slide-content-figure {
    position: absolute;
    top: -4.625rem;
  }

  .reviews-carousel-slide-content-figure-image {
    width: 7.625rem;
    height: 7.625rem;
    border: 2px solid $reviews_slide_figure_border_color;
    border-radius: 50%;
  }

  .reviews-carousel-slide-content-name {
    font-size: $font_size_18;
    font-weight: 600;
    line-height: 2;
  }

  .reviews-carousel-slide-content-position {
    margin-bottom: 1.625rem;
    font-size: $font_size_14;
  }

  .reviews-carousel-slide-content {
    .l-row {
      align-items: flex-start;
    }
  }

  .reviews-carousel-slide-content-icon {
    font-size: $font_size_27;
  }

  .reviews-carousel-slide-content-text {
    font-size: $font_size_15;
    text-align: justify;
  }

  .reviews-carousel-slide-content-icon.quote-left-icon {
    margin-right: 1.0625rem;
  }

  .reviews-carousel .VueCarousel-wrapper {
    margin-bottom: 1.25rem;
  }

  .contact {
    padding: 4.625rem 0;
    font-size: $font_size_15;
    color: $contact_section_content_color;
    background: $contact_section_background_color;
  }

  .contact-header {
    position: relative;
    margin-bottom: 1.6875rem;
    font-family: $font_raleway;
    color: $contact_section_header_color;
  }

  .contact-header::after {
    position: absolute;
    bottom: -0.625rem;
    left: 50%;
    width: 4.4375rem;
    height: 5px;
    content: "";
    background: $contact_header_underline_color;
    transform: translateX(-50%);
  }

  .contact-description {
    margin-bottom: 4.1875rem;
  }

  .contact-information {
    align-self: flex-start;
    width: 23.6875rem;
    padding: 2.875rem 1.4375rem;
    margin-right: 0.875rem;
    text-align: left;
    background: $background_primary_color;

    .l-row {
      align-items: flex-start;
      justify-content: flex-start;
    }
  }

  .contact-information-section:not(:last-of-type) {
    margin-bottom: 1.875rem;
  }

  .contact-information-section-icon {
    margin-right: 1rem;
    font-size: $font_size_20;
    color: $icon_tertiary_color;
  }

  .contact-information-section-header {
    margin-bottom: 0.625rem;
    font-size: $font_size_18;
    color: $contact_section_header_color;
  }

  .contact-information-section-text {
    font-weight: 300;
  }

  .contact-form {
    width: 48.5625rem;
    text-align: left;
  }

  .contact-form ::placeholder {
    font-size: $font_size_16;
    font-weight: 300;
    color: $placeholder_color;
  }

  .contact-form-name,
  .contact-form-email,
  .contact-form-message {
    width: 100%;
    margin-bottom: 1.625rem;
    border: none;
  }

  .contact-form-name,
  .contact-form-email {
    height: 3rem;
    padding: 0 0.8125rem;
  }

  .contact-form-message {
    padding: 1.4375rem 0.8125rem;
    resize: none;
  }

  .contact-form-submit-button {
    width: 9.875rem;
    height: 2.8125rem;
    padding: 0;
    font-size: $font_size_16;
    color: $content_secondary_color;
    cursor: pointer;
    background: $send_message_button_background_color;
    border: none;
  }

  .main-footer-copyright {
    font-family: $font_montserrat;
  }
</style>
