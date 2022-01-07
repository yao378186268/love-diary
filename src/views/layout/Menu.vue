<template>
  <div class="menu">
    <div type="primary" @click="hideMenu" class="toggle-menu"><Fold v-show="!isCollapse" style="width: 1.5em; height: 1.5em" /><Expand v-show="isCollapse" style="width: 1.5em; height: 1.5em" /></div>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" background-color="$bg-color" active-text-color="rgb(183, 39, 255)">
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>

        <el-sub-menu index="1-1">
          <template #title><span>Group One</span></template>
          <el-menu-item-group>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { Location, Fold, Expand } from '@element-plus/icons-vue';
import { ref } from 'vue';
const isCollapse = ref(false);

let hideMenu = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<style scoped lang="scss">
.menu {
  height: calc(100vh - 50px);
  background-color: $bg-color;

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }

  ::v-deep .el-sub-menu__title:hover,
  ::v-deep .el-menu-item:hover {
    background-color: #fff;
  }

  .toggle-menu {
    width: 100%;
    height: 40px;
    @include flex-center();
    border-bottom: 1px solid $active-color;

    cursor: pointer;
    &:hover {
      background-color: #fff;
    }
  }
}
</style>
