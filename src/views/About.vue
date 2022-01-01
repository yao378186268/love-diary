<template>
  <div class="">about</div>
  <el-button @click="add">{{ "count++" + state.a }}</el-button>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
const state = reactive({
  a: 2,
});
let add = (): void => {
  state.a++;
};
onMounted(() => {
  console.log("init");
});
</script>
