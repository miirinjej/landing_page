<template>
  <section class="reviews-section">
    <div class="l-content">
      <h2 class="reviews-section__heading">
        Some Talk of Our Clients
      </h2>
      <no-ssr placeholder="Loading...">
        <carousel
          class="carousel"
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
            class="slide"
          >
            <div class="slide__content">
              <figure class="slide__figure">
                <img
                  class="slide__image"
                  :src="review.imageUrl"
                  :alt="review.author"
                >
              </figure>
              <div class="slide__author">
                {{ review.author }}
              </div>
              <div class="slide__position">
                {{ review.position }}
              </div>
              <div class="l-row">
                <fa
                  class="slide__icon slide__icon--quote-left"
                  icon="quote-left"
                />
                <span class="slide__review-text">
                  {{ review.reviewText }}
                  <fa
                    class="slide__icon slide__icon--quote-right"
                    icon="quote-right"
                  />
                </span>
              </div>
            </div>
          </slide>
        </carousel>
      </no-ssr>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Reviews',
    props: {
      reviews: {
        type: Array,
        required: true,
        validator(value) {
          for (let i = 0; i < value.length; i += 1) {
            if (typeof value[i].imageUrl !== 'string') {
              return false;
            }
            if (typeof value[i].author !== 'string') {
              return false;
            }
            if (typeof value[i].position !== 'string') {
              return false;
            }
            if (typeof value[i].reviewText !== 'string') {
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
  };
</script>

<style lang="scss" scoped>
  .reviews-section {
    padding: 5.625rem 0 5.375rem;
    margin-bottom: 5.625rem;
    color: $content_secondary_color;
    background-image: linear-gradient(-110deg, $color_dodger_blue_primary, $color_denim);
  }

  .carousel {
    display: flex;
    align-items: center;
    justify-content: center;

    .VueCarousel-wrapper {
      margin-bottom: 1.25rem;
    }
  }

  .slide {
    @extend %flex_column;
    justify-content: flex-end;
    height: 21.9375rem;

    &:nth-of-type(even) {
      margin-left: 1.25rem;
    }

    &:nth-of-type(2n+3) {
      margin-left: -1.25rem;
    }
  }

  .slide__content {
    @extend %flex_column;
    position: relative;
    align-items: center;
    width: 35rem;
    height: 17.3125rem;
    padding: 3rem 4.6875rem 2.3125rem;
    border: 1px solid $reviews_slide_border_color;

    .l-row {
      align-items: flex-start;
    }
  }

  .slide__figure {
    position: absolute;
    top: -4.625rem;
  }

  .slide__image {
    width: 7.625rem;
    height: 7.625rem;
    border: 2px solid $reviews_slide_figure_border_color;
    border-radius: 50%;
  }

  .slide__author {
    font-size: $font_size_18;
    font-weight: 600;
    line-height: 2;
  }

  .slide__position {
    margin-bottom: 1.625rem;
    font-size: $font_size_14;
  }

  .slide__icon {
    font-size: $font_size_27;

    &--quote-left-icon {
      margin-right: 1.0625rem;
    }
  }

  .slide__review-text {
    font-size: $font_size_15;
    text-align: justify;
  }
</style>
