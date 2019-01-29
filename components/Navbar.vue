<template>
  <div class="navbar">
    <div class="l-columns-3">
      <div class="navbar-brand-name"></div>
      <main-menu />
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
  };
</script>

<style scoped>
</style>
