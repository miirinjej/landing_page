<template>
  <nav class="main-menu">
    <ul class="main-menu-list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="main-menu-list-item"
      >
        <a
          class="main-menu-list-item-link"
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
</style>
