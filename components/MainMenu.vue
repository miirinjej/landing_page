<template>
  <nav class="main-menu">
    <ul class="main-menu-list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="main-menu-list-item"
      >
        <a
          class="main-menu-link"
          :href="`#${item.name.toLowerCase()}`"
        >
          {{ item.name }}
        </a>
      </li>
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
          }

          return true;
        },
        default() {
          return [];
        },
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
    display: flex;
    justify-content: space-between;
    height: 100%;
    user-select: none;
    @extend %list_style;
  }

  .main-menu-list-item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .main-menu-list-item:not(:last-of-type) {
    margin-right: 2.25rem;
  }

  .main-menu-link {
    color: $main_menu_link_color;
    text-decoration: none;
  }
</style>
