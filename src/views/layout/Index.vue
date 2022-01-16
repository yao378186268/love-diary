<template>
  <div class="index">
    <HeaderVue />
    <div class="body">
      <MenuVue />
      <div class="main">
        <Nav></Nav>
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuVue from './Menu.vue';
import HeaderVue from './Header.vue';
import Nav from './Nav.vue';
</script>

<style scoped lang="scss">
.body {
  display: flex;
  .main {
    width: 100%;
  }
}
</style>
