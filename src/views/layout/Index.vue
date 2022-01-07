<template>
  <div class="index">
    <HeaderVue />
    <div class="body">
      <MenuVue />
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuVue from './Menu.vue';
import HeaderVue from './Header.vue';
</script>

<style scoped lang="scss">
.body {
  display: flex;
}
</style>
