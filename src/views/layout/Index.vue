<template>
  <div class="index">
    <HeaderVue />
    <div class="body">
      <MenuVue />
      <div class="main">
        <Nav></Nav>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
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
