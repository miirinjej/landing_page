
<template>
  <nav class="main-menu">
    <ul class="main-menu-list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="main-menu-list-item"
        :class="{ 'is-active': item.isActive }"
      >
        <a
          class="main-menu-link"
          @click="affixClick(item)"
        >
          {{ item.name }}
        </a>
      </li>
      <li
        class="main-menu-list-underbar"
        :style="{ left: underbarOffsetLeft + 'px', width: underbarWidth + 'px' }"
      ></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'MainMenu',
    props: {
      items: {
        type: Array,
        validator(value) {
          for (let i = 0; i < value.length; i += 1) {
            if (typeof value[i].name !== 'string') {
              return false;
            }
            if (typeof value[i].isActive !== 'boolean') {
              return false;
            }
          }

          return true;
        },
        default() {
          return [];
        },
      },
    },
    data() {
      return {
        navbarHeight: 0,
        underbarOffsetLeft: 0,
        underbarWidth: 0,
        scrollEventIsStopped: false,
      };
    },
    mounted() {
      this.navbarHeight = document.querySelector('.navbar').offsetHeight;


      this.getUnderbarProperties();


      window.addEventListener('scroll', this.affixScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.affixScroll);
    },
    methods: {
      affixClick(item) {
        this.scrollEventIsStopped = true;


        const element = document.getElementById(`${item.name.toLowerCase()}`);

        window.scrollTo(0, element.offsetTop - this.navbarHeight);

        this.items.forEach((el) => {
          const mainMenuListItems = document.querySelectorAll('.main-menu-list-item');

          mainMenuListItems.forEach(el => el.classList.remove('is-active'));


          el.isActive = el === item;
        });


        setTimeout(() => {
          this.getUnderbarProperties();
        }, 100);


        setTimeout(() => {
          this.scrollEventIsStopped = false;
        }, 1000);
      },
      affixScroll() {
        if (!(this.scrollEventIsStopped)) {
          const body = document.body;
          const html = document.documentElement;
          const scrollTop = body.scrollTop || html.scrollTop;
          const affixPlaces = document.querySelectorAll('.js-affix-place');
          const mainMenuListItems = document.querySelectorAll('.main-menu-list-item');

          for (let i = 0; i < affixPlaces.length; i += 1) {
            if ((scrollTop + this.navbarHeight) >= affixPlaces[i].offsetTop) {
              mainMenuListItems[i].classList.add('is-active');
              for (let j = 0; j < mainMenuListItems.length; j += 1) {
                if (mainMenuListItems[j] !== mainMenuListItems[i]) {
                  mainMenuListItems[j].classList.remove('is-active');
                }
              }
            } else {
              mainMenuListItems[i].classList.remove(('is-active'));
            }
          }

          this.getUnderbarProperties();
        }
      },
      getUnderbarProperties() {
        const mainMenuListItems = document.querySelectorAll('.main-menu-list-item');

        for (let i = 0; i < mainMenuListItems.length; i += 1) {
          if (mainMenuListItems[i].classList.contains('is-active')) {
            this.underbarOffsetLeft = mainMenuListItems[i].offsetLeft;
            this.underbarWidth = mainMenuListItems[i].offsetWidth;
          }
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .main-menu {
    display: inline-block;
    height: 100%;
  }

  .main-menu-list {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 100%;
    user-select: none;
    @extend %list_style;
  }

  .main-menu-list-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .main-menu-list-underbar {
    position: absolute;
    bottom: 0.625rem;
    left: 0;
    display: block;
    height: 5px;
    content: "";
    background: $background_secondary_color;
    transition: all 0.5s ease;
  }

  .main-menu-list-item:not(:last-of-type) {
    margin-right: 2.25rem;
  }

  .main-menu-link {
    color: $main_menu_link_color;
    text-decoration: none;
    cursor: pointer;
  }
</style>
