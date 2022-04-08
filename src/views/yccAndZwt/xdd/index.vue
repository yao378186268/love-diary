<!--
 * @Author: 姚成成
 * @Date: 2022-04-07 09:54:17
 * @LastEditors: 姚成成
 * @LastEditTime: 2022-04-07 09:54:19
 * @FilePath: /love-diary-client/src/views/yccAndZwt/xdd/index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div class="xdd">
    <div class="xdd-item" v-for="(item, index) in data.srcList" :key="index">
      <video class="video" controls="false" controlslist="nodownload">
        <source :src="'http://121.5.130.175:8081/lovediary/video/' + item.url" type="video/mp4" />
        您的浏览器不支持 HTML5 video 标签。
      </video>
    </div>
  </div>
</template>

<script setup lang="ts">
// 接口
import { getVideo } from '@/api/picture';
// 类型
import { ImgInter } from '@/interface/state';
// vue api
import { reactive, onMounted } from 'vue';

// 图片数组
let data = reactive({
  srcList: Array<ImgInter>()
});

const getYccPicture = () => {
  getVideo({})
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
.xdd {
  width: calc(100vw - 200px);
  height: calc(100vh - 100px);
  overflow-y: auto;
  padding: 10px 10px 0;
  display: flex;
  flex-wrap: wrap;

  .xdd-item {
    width: 25%;
    padding: 10px;
    height: 300px;

    .video {
      background-color: $bg-color;
      width: 100%;
      height: 300px;
    }
  }
}

.xdd::-webkit-scrollbar {
  display: none;
}
</style>
