<!--
 * @Author: 姚成成
 * @Date: 2022-04-07 10:14:16
 * @LastEditors: 姚成成
 * @LastEditTime: 2022-04-07 19:05:50
 * @FilePath: /love-diary-client/src/views/components/ImgCard/index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <el-image :src="props.src" lazy class="img-card" fit="contain" :preview-src-list="data.srcList"></el-image>
</template>

<script setup lang="ts">
import { defineProps, onMounted, reactive } from 'vue';
const props = defineProps({
  src: String
});

// 预览图片数组
const data = reactive({
  srcList: Array<string>()
});

onMounted(() => {});
</script>

<style scoped lang="scss">
.img-card {
  box-sizing: border-box;
  padding: 8px 8px 0;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
}
</style>
