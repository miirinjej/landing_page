<template>
  <div class="navbar">
    <div class="l-navbar">
      <div class="l-row">
        <div class="navbar-brand-name">
          UIXREX
        </div>
        <main-menu :items="menuItems" />
        <button class="navbar-try-for-free-button button">
          Try for free
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import MainMenu from '~/components/MainMenu.vue';

  export default {
    name: 'Toolbar',
    components: {
      MainMenu,
    },
    data() {
      return {
        menuItems: [
          { name: 'Home' },
          { name: 'About' },
          { name: 'Features' },
          { name: 'Pricing' },
          { name: 'Screenshot' },
          { name: 'Contact' },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    margin-top: 3.875rem;
  }

  .navbar-brand-name {
    font-size: $font_size_34;
    font-weight: 600;
    color: $content_secondary_color;
  }

  .navbar-try-for-free-button {
    font-size: $font_size_25;
    color: $content_tertiary_color;
    background: $try_for_free_button_background_color;
  }
</style>
