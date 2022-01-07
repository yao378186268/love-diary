<template>
  <router-view />
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
const state = useStore();
//在页面加载时读取sessionStorage里的状态信息
if (sessionStorage.getItem('store')) {
  state.replaceState(Object.assign({}, state.state, JSON.parse(sessionStorage.getItem('store')!)));
}
//在页面刷新时将vuex里的信息保存到sessionStorage里
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('store', JSON.stringify(state.state));
});
</script>

<style lang="scss"></style>
