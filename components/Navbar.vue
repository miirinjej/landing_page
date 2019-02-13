<template>
  <div
    class="navbar"
    :class="{ 'is-sticky': isSticky }"
  >
    <div class="l-navbar">
      <div class="l-row">
        <div class="navbar__brand-name">
          UIXREX
        </div>
        <main-menu :items="menuItems" />
        <button
          class="navbar__button button button--rounded"
          :class="{ 'is-inverted': isSticky }"
        >
          Try for free
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import MainMenu from '~/components/MainMenu.vue';

  export default {
    name: 'Navbar',
    components: {
      MainMenu,
    },
    data() {
      return {
        menuItems: [
          { name: 'Home', isActive: true },
          { name: 'About', isActive: false },
          { name: 'Features', isActive: false },
          { name: 'Pricing', isActive: false },
          { name: 'Screenshots', isActive: false },
          { name: 'Contact', isActive: false },
        ],
        isSticky: false,
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const body = document.body;
        const html = document.documentElement;
        const scrollTop = body.scrollTop || html.scrollTop;
        const homeImage = document.querySelector('.home-section__figure');

        this.isSticky = (scrollTop > homeImage.offsetTop);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .navbar {
    position: fixed;
    top: 0;
    z-index: 2000;
    width: 100%;
    margin-top: 3.875rem;
    transition: all 0.5s ease;

    &.is-sticky {
      margin-top: 0;
      background: linear-gradient(to right, $color_denim 0, $color_dodger_blue_primary 50%, $color_denim 100%);
      border-bottom: 5px solid $color_royal_blue;
    }
  }

  .navbar__brand-name {
    font-size: $font_size_34;
    font-weight: 600;
    color: $content_secondary_color;
  }

  .navbar__button {
    font-size: $font_size_25;
    color: $content_tertiary_color;
    background: $try_for_free_button_background_color;
    transition: background-color 0.5s ease;

    &.is-inverted {
      color: $content_secondary_color;
      background: transparent;
    }
  }
</style>
