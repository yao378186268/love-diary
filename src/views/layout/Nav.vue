<template>
  <div class="nav">
    <el-tag :closable="index !== 0" v-for="(item, index) in tagList" :key="index" :type="item['menu_type']" @click="tagClick(item)" @close="tagClose(item, index)">{{ item['menu_name'] }}</el-tag>
  </div>
</template>

<script setup lang="ts">
import { MenuInter } from '@/interface/state';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const state = useStore();
const router = useRouter();

const tagList = reactive([{ menu_name: '首页', menu_path: '/login' }, ...state.state.menu]);

const tagClick = (item: MenuInter) => {
  state.commit('SET_MENU', item);
  router.push(item['menu_path']);
};

const tagClose = (item: MenuInter, index: number) => {
  tagList.splice(index, 1);
  state.commit('DELETE_MENU', item);
  console.log(state.state);
};
</script>

<style scoped lang="scss">
.nav {
  height: 40px;
  box-shadow: 0 5px 10px #eee;
  border-radius: 2px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  .el-tag {
    cursor: pointer;
    margin-right: 4px;
  }
}
</style>
