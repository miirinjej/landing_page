<template>
  <div class="navbar">
    <div class="l-columns-3">
      <div class="navbar-brand-name"></div>
      <main-menu :items="menuItems" />
      <button class="navbar-try-for-free-button button"></button>
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
          { name: 'Reviews' },
          { name: 'Contact' },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
</style>
