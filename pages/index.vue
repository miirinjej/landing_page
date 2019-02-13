<template>
  <main class="l-container">
    <home />
    <about />
    <features />
    <pricing />
    <screenshots :screenshots="screenshots" />
    <reviews :reviews="reviews" />
    <contact />
    <section class="map">
    </section>
    <main-footer />
  </main>
</template>

<script>
  import Home from '~/components/Home';
  import About from '~/components/About';
  import Features from '~/components/Features';
  import Pricing from '~/components/Pricing';
  import Screenshots from '~/components/Screenshots';
  import Reviews from '~/components/Reviews';
  import Contact from '../components/Contact';
  import MainFooter from '~/components/MainFooter';

  export default {
    components: {
      Home,
      About,
      Features,
      Pricing,
      Screenshots,
      Reviews,
      Contact,
      MainFooter,
    },
    data() {
      return {
        screenshots: [
          { name: 'workout', imageUrl: '/screenshots/workout.png' },
          { name: 'story', imageUrl: '/screenshots/story.png' },
          { name: 'map', imageUrl: '/screenshots/map.png' },
          { name: 'music player', imageUrl: '/screenshots/music_player.png' },
          { name: 'login', imageUrl: '/screenshots/login.png' },
          { name: 'story 2', imageUrl: '/screenshots/story_2.png' },
          { name: 'map 2', imageUrl: '/screenshots/map_2.png' },
        ],
        reviews: [
          {
            imageUrl: '/reviews/james_santana.png',
            author: 'James Santana',
            position: 'Web Developer',
            reviewText:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, good.',
          },
          {
            imageUrl: '/reviews/julia_green.png',
            author: 'Julia Green',
            position: 'Web Designer',
            reviewText:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, good.',
          },
          {
            imageUrl: '/reviews/oliver_gomez.png',
            author: 'Oliver Gomez',
            position: 'CEO of google',
            reviewText:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, good.',
          },
          {
            imageUrl: '/reviews/rita_watson.png',
            author: 'Rita Watson',
            position: 'Web Designer',
            reviewText:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, good.',
          },
          {
            imageUrl: '/reviews/monica_flower.png',
            author: 'Monica Flower',
            position: 'Marketer',
            reviewText:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, good.',
          },
          {
            imageUrl: '/reviews/sarah_april.png',
            author: 'Sarah April',
            position: 'IT manager',
            reviewText:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, good.',
          },
        ],
      };
    },
  };
</script>

<style lang="scss">
  .map {
    height: 25.0625rem;
    background: url(/map/map.png) 0 0 no-repeat;
  }
</style>
