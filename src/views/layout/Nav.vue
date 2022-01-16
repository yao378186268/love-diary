<template>
  <div class="nav">
    <el-tag :closable="index !== 0" v-for="(item, index) in tagList" :key="index" :type="item['menu_type']" @click="tagClick(item)" @close="tagClose(item, index)">{{ item['menu_name'] }}</el-tag>
  </div>
</template>

<script setup lang="ts">
import { MenuInter } from '@/interface/state';
import { reactive } from 'vue';
import { useRouter, onBeforeRouteUpdate } from 'vue-router';
import { useStore } from 'vuex';
const state = useStore();
const router = useRouter();

let tagList = reactive([{ menu_name: '首页', menu_path: '/index' }, ...state.state.menu]);

onBeforeRouteUpdate(to => {
  toggleTag(to.path);
});

const toggleTag = (path: string) => {
  tagList.forEach(item => {
    if (item['menu_path'] === path) {
      item['menu_type'] = 'success';
    } else {
      item['menu_type'] = '';
    }
  });
};

const tagClick = (item: MenuInter) => {
  toggleTag(item['menu_path']);
  state.commit('SET_MENU', item);
  router.push(item['menu_path']);
};

const tagClose = (item: MenuInter, index: number) => {
  tagList.splice(index, 1);
  state.commit('DELETE_MENU', item);
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
