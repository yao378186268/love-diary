<!--
 * @Author: 姚成成
 * @Date: 2022-01-16 12:46:50
 * @LastEditors: 姚成成
 * @LastEditTime: 2022-04-07 09:57:42
 * @FilePath: /love-diary-client/src/views/layout/Nav.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div class="nav">
    <el-tag :closable="index !== 0" v-for="(item, index) in data.tagList" :key="index" :type="item['menu_type']" @click="tagClick(item)" @close="tagClose(item, index)">{{ item['menu_name'] }}</el-tag>
  </div>
</template>

<script setup lang="ts">
import { MenuInter } from '@/interface/state';
import { reactive, watch } from 'vue';
import { useRouter, onBeforeRouteUpdate } from 'vue-router';
import { useStore } from 'vuex';
const state = useStore();
const router = useRouter();

let data = reactive({ tagList: [{ menu_name: '首页', menu_path: '/index' }, ...state.state.menu] });

onBeforeRouteUpdate(to => {
  toggleTag(to.path);
});

watch(state.state.menu, (newState: MenuInter[]) => {
  data.tagList = [{ menu_name: '首页', menu_path: '/index' }, ...newState];
});

const toggleTag = (path: string) => {
  data.tagList.forEach(item => {
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
  data.tagList.splice(index, 1);
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
