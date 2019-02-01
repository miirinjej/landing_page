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
</style>
