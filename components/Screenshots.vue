<template>
  <section
    id="screenshots-section"
    class="screenshots-section js-affix"
  >
    <h2 class="screenshots-section__heading heading heading--primary">
      App Screenshots
    </h2>
    <p class="screenshots-section__description">
      Most such devices are sold with several apps bundled as pre-installed software,<br>
      such as a web browser, email client, calendar, mapping program.
    </p>
    <no-ssr placeholder="Loading...">
      <carousel
        ref="screenshotsSectionCarousel"
        class="carousel"
        :per-page-custom="[[1920, 5]]"
        :autoplay="true"
        :autoplay-timeout="5000"
        :loop="true"
        :pagination-enabled="false"
      >
        <slide
          v-for="(screenshot, index) in screenshots"
          :key="index"
        >
          <figure>
            <img
              :src="screenshot.imageUrl"
              :alt="screenshot.name"
            >
          </figure>
        </slide>
      </carousel>
      <div class="navigation">
        <button
          class="navigation__button button button--circle"
          @click="navigate('prev')"
        >
          <fa
            class="navigation__icon"
            icon="long-arrow-alt-left"
          />
        </button>
        <button
          class="navigation__button button button--circle"
          @click="navigate('next')"
        >
          <fa
            class="navigation__icon"
            icon="long-arrow-alt-right"
          />
        </button>
      </div>
    </no-ssr>
  </section>
</template>

<script>
  export default {
    name: 'Screenshots',
    props: {
      screenshots: {
        type: Array,
        required: true,
        validator(value) {
          for (let i = 0; i < value.length; i += 1) {
            if (typeof value[i].imageUrl !== 'string') {
              return false;
            }
            if (typeof value[i].name !== 'string') {
              return false;
            }
          }

          return true;
        },
        default() {
          return [];
        },
      },
    },
    methods: {
      navigate(value) {
        const carousel = this.$refs.screenshotsSectionCarousel;
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

<style lang="scss" scoped>
  .screenshots-section {
    padding-top: 4.75rem;
    padding-bottom: 5.625rem;
  }

  .screenshots-section__description {
    margin-bottom: 5.625rem;
  }

  .screenshots-section__carousel {
    margin-bottom: 3.0625rem;
  }

  .navigation__button {
    margin-right: 3.3125rem;
    font-size: $font_size_28;
    color: $content_secondary_color;
    background: $navigation_button_background_color;

    &:last-of-type {
      margin-right: 0;
    }
  }
</style>
