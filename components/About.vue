<template>
  <section
    id="about-section"
    class="about-section js-affix"
  >
    <div class="l-content">
      <h2 class="about-section__heading heading heading--primary">
        About The App
      </h2>
      <p class="about-section__description">
        Writers and stars of Veep have responded incredulously to the news an Australian politician<br>
        required preinstalled stitches way email client, calendar, mapping program.
      </p>
      <div class="l-row">
        <div class="card">
          <div class="l-col">
            <figure class="card__figure">
              <div class="card__rhombus-layer"></div>
              <fa
                class="card__icon"
                icon="headset"
              />
            </figure>
            <h3 class="card__heading">
              24/7 Support
            </h3>
            <p class="card__description">
              Apps that are not preinstalled are usually available through distribution platforms called app stores.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="l-col">
            <figure class="card__figure">
              <div class="card__rhombus-layer"></div>
              <fa
                class="card__icon"
                icon="lock"
              />
            </figure>
            <h3 class="card__heading">
              Data Privacy
            </h3>
            <p class="card__description">
              Apps that are not preinstalled are usually available through distribution platforms called app stores.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="l-col">
            <figure class="card__figure">
              <div class="card__rhombus-layer"></div>
              <fa
                class="card__icon"
                icon="download"
              />
            </figure>
            <h3 class="card__heading">
              Easy Download
            </h3>
            <p class="card__description">
              Apps that are not preinstalled are usually available through distribution platforms called app stores.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'About',
  };
</script>

<style lang="scss" scoped>
  .about-section {
    padding: 5.625rem 0;
  }

  .about-section__description {
    margin-bottom: 5.625rem;
  }

  .card {
    width: 22.375rem;
    padding: 3.4375rem 2rem 3.625rem;
    font-size: $font_size_16;
    line-height: 1.875;
    box-shadow: 1px 2px 1.25rem 1px rgba(34, 31, 31, 0.2);
  }

  .card__figure {
    position: relative;
    align-items: center;
    justify-content: center;
    width: 4.25rem;
    height: 4.25rem;
    margin-bottom: 2.625rem;
  }

  .card__rhombus-layer {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: $rhombus_background_primary_color;
    transform: translate(-50%, -50%) rotate(45deg);

    .card:nth-of-type(2) & {
      background: $rhombus_background_secondary_color;
    }
  }

  .card__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: $font_size_32;
    color: $icon_secondary_color;
    transform: translate(-50%, -50%);

    .card:nth-of-type(2) & {
      color: $icon_primary_color;
    }
  }

  .card__heading {
    margin-bottom: 2.5rem;

    .card:nth-of-type(2) & {
      color: $content_tertiary_color;
    }
  }
</style>
