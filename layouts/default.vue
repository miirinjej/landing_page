<template>
  <div>
    <navbar />
    <nuxt />
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar.vue';

  export default {
    components: {
      Navbar,
    },
  };
</script>

<style>
  html {
    box-sizing: border-box;
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
