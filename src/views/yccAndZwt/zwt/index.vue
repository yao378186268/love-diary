<!--
 * @Author: 姚成成
 * @Date: 2022-04-07 09:53:13
 * @LastEditors: 姚成成
 * @LastEditTime: 2022-04-07 19:06:33
 * @FilePath: /love-diary-client/src/views/yccAndZwt/zwt/index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div class="zwt">
    <div class="grid">
      <img-card v-for="(item, index) in data.srcList" :key="index" :src="'http://121.5.130.175:8081/lovediary/zhangwenting/' + item.url"></img-card>
    </div>
  </div>
</template>

<script setup lang="ts">
// 接口
import { getPicture } from '@/api/picture';
// 组件
import ImgCard from '@/views/components/ImgCard/index.vue';
// 类型
import { ImgInter } from '@/interface/state';
// vue api
import { reactive, onMounted } from 'vue';

// 图片数组
let data = reactive({
  srcList: Array<ImgInter>()
});

const getYccPicture = () => {
  getPicture({ author: '2' })
    .then(res => {
      if (res.data.code !== 200) {
        return;
      }
      data.srcList = res.data.data;
    })
    .catch(err => {
      console.log(err);
    });
};

onMounted(() => {
  getYccPicture();
});
</script>

<style scoped lang="scss">
.zwt {
  height: calc(100vh - 100px);
  overflow-y: auto;
  position: relative;
  padding: 10px 10px 0;

  .grid {
    column-count: 4;
  }
}

.zwt::-webkit-scrollbar {
  display: none;
}
</style>
