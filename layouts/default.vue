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

<style lang="scss">
  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  body {
    font: 1.25em/1.25 $content_font;
  }

  h1,
  h2,
  h3 {
    font-family: $header_font;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
