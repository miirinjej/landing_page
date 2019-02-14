<template>
  <section
    id="features-section"
    class="features-section js-affix"
  >
    <div class="l-content">
      <h2 class="features-section__heading">
        Features The App
      </h2>
      <p class="features-section__description">
        Writers and stars of Veep have responded incredulously to the news an Australian politician<br>
        required preinstalled stitches way email client, calendar, mapping program.
      </p>
      <div class="l-row">
        <figure class="features-section__figure">
          <picture>
            <source
              srcset="/features/phone.webp"
              type="image/webp"
            >
            <source
              srcset="/features/phone.png"
              type="image/png"
            >
            <img
              src="/features/phone.png"
              alt="phone"
            >
          </picture>
        </figure>
        <div class="features">
          <ul class="features__list">
            <li class="features__item">
              <div class="l-row">
                <figure class="features__figure figure">
                  <div class="figure__circle-layer">
                    <fa
                      class="figure__icon"
                      icon="layer-group"
                    />
                  </div>
                </figure>
                <div>
                  <h3 class="features__heading">
                    Creative design
                  </h3>
                  <p class="features__description">
                    Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara. Another
                    projects
                    managed with a easy design is what we stand for.incididunt ugt labore.
                  </p>
                </div>
              </div>
            </li>
            <li class="features__item">
              <div class="l-row">
                <div class="figure__circle-layer">
                  <fa
                    class="figure__icon"
                    icon="ellipsis-h"
                  />
                </div>
                <div>
                  <h3 class="features__heading">
                    Unlimited features
                  </h3>
                  <p class="features__description">
                    Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara. Another
                    projects
                    managed with a easy design is what we stand for.incididunt ugt labore.
                  </p>
                </div>
              </div>
            </li>
            <li class="features__item">
              <div class="l-row">
                <div class="figure__circle-layer">
                  <fa
                    class="figure__icon"
                    :icon="['far', 'hand-point-up']"
                  />
                </div>
                <div>
                  <h3 class="features__heading">
                    User friendly
                  </h3>
                  <p class="features__description">
                    Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara. Another
                    projects
                    managed with a easy design is what we stand for.incididunt ugt labore.
                  </p>
                </div>
              </div>
            </li>
            <li class="features__item">
              <div class="l-row">
                <div class="figure__circle-layer">
                  <fa
                    class="figure__icon"
                    icon="code"
                  />
                </div>
                <div>
                  <h3 class="features__heading">
                    Clean codes
                  </h3>
                  <p class="features__description">
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
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Features',
  };
</script>

<style lang="scss" scoped>
  .features-section {
    padding-top: 5.5625rem;
    padding-bottom: 22.375rem;
    color: $content_secondary_color;
    background: $background_primary_color url("/features/background.svg") 0 0 no-repeat;

    .l-row {
      align-items: flex-start;
    }
  }

  .features-section__description {
    margin-bottom: 6.1875rem;
  }

  .features__list {
    @extend %list_style;
    text-align: left;
  }

  .features__item {
    line-height: 1.875;

    &:not(:last-of-type) {
      margin-bottom: 4.5rem;
    }
  }

  .figure__circle-layer {
    position: relative;
    width: 4.875rem;
    height: 4.875rem;
    margin-right: 2.375rem;
    background: $circle_background_color;
    border-radius: 50%;
  }

  .figure__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: $font_size_36;
    color: $icon_secondary_color;
    transform: translate(-50%, -50%);
  }

  .features__heading {
    margin-bottom: 1.25rem;
    font-size: $font_size_20;
    color: $heading_secondary_color;
    text-transform: uppercase;
  }

  .features__description {
    width: 34.625rem;
    font-size: $font_size_16;
  }
</style>
