<template>
  <section
    id="home-section"
    class="home-section js-affix"
  >
    <div class="l-header">
      <div class="l-row">
        <figure class="home-section__figure">
          <img
            src="/home/phone.png"
            alt="phone"
          >
        </figure>
        <div class="promo">
          <h1 class="promo__heading">
            The Best App to Increase
            Your Productivity
          </h1>
          <p class="promo__description">
            A mobile app is a computer program designed to run on a
            mobile device such as a phone/tablet or watch.
          </p>
          <div class="promo__download">
            <button class="promo__button button button--rounded">
              <span class="l-row">
                <fa
                  class="promo__icon"
                  :icon="['fab', 'apple']"
                />
                <span class="promo__action-description">
                  Get It From
                  <span class="promo__store-name">
                    Appstore
                  </span>
                </span>
              </span>
            </button>
            <button class="promo__button button button--rounded">
              <span class="l-row">
                <fa
                  class="promo__icon"
                  :icon="['fab', 'google-play']"
                />
                <span class="promo__action-description">
                  Get It From
                  <span class="promo__store-name">
                    Playstore
                  </span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Home',
  };
</script>

<style lang="scss" scoped>
  .home-section {
    margin-bottom: -2.875rem;
    color: $content_secondary_color;
    background: $background_primary_color url("/home/background.svg") 0 0 no-repeat;
  }

  .home-section__figure {
    margin-top: 9.0625rem;

    /* dirty hack, because image layers is merged */
    margin-left: -6.5625rem;
  }

  .promo {
    width: 37.5rem;
  }

  .promo__heading {
    font-size: $font_size_46;
    font-weight: 600;
  }

  .promo__download {
    margin-top: 5.3125rem;
  }

  .promo__button {
    width: 14.375rem;
    height: 5.0625rem;
    padding: 0 2.75rem;
    font-size: $font_size-13;
    color: $content_secondary_color;
    background: $download_button_background_color;
    border-radius: 2.5rem;

    &:not(:last-of-type) {
      margin-right: 1.125rem;
    }
  }

  .promo__icon {
    font-size: $font_size_32;
  }

  .promo__action-description {
    @extend %flex_column;
    text-align: left;
  }

  .promo__store-name {
    font-family: $font_montserrat;
    font-size: $font_size_19;
    font-weight: 600;
  }
</style>
