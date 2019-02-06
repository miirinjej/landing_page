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
    scroll-behavior: smooth;
  }

  body {
    font: 1.25rem/1.8 $content_font;
    color: $content_primary_color;
    background: $background_primary_color;
  }

  h1,
  h2,
  h3 {
    font-family: $header_font;
    line-height: 1.34782608695;
  }

  h2 {
    margin-bottom: 2.55rem;
    font-size: $font_size_36;
    font-weight: 500;
  }

  h3 {
    font-size: $font_size_24;
    color: $color_scorpion_dark;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
