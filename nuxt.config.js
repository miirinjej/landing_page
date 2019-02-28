const pkg = require('./package');


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en-US',
    },
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffffff' },

  /*
  ** Global CSS
  */
  css: [
    { src: 'normalize.css' },
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-carousel', mode: 'client' },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [ 'nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: [
            'faApple',
            'faGooglePlay',
            'faFacebookF',
            'faTwitter',
            'faInstagram',
            'faGooglePlusG',
            'faBehance',
            'faDribbble',
          ],
        },
        {
          set: '@fortawesome/free-regular-svg-icons',
          icons: [
            'faHandPointUp',
          ],
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: [
            'faCheck',
            'faCircle',
            'faCode',
            'faDownload',
            'faEllipsisH',
            'faHeadset',
            'faLayerGroup',
            'faLock',
            'faLongArrowAltRight',
            'faLongArrowAltLeft',
            'faQuoteLeft',
            'faQuoteRight',
            'faTimes',
            'faMap',
            'faPhone',
            'faEnvelope',
          ],
        },
      ],
    }],
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
    'nuxt-leaflet',
    'nuxt-webfontloader',
  ],

  /*
  ** Style resources
  */
  styleResources: {
    scss: [
      '~/assets/*/*.scss',
    ],
  },

  /*
  ** Web font loader
  */
  webfontloader: {
    google: {
      families: [
        'Montserrat:400,500,600',
        'Poppins:300,400,500,600',
        'Raleway:600',
      ],
    },
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    },
  },
};
