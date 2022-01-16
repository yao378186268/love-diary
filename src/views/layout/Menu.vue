<template>
  <div class="menu">
    <div type="primary" @click="hideMenu" class="toggle-menu"><Fold v-show="!isCollapse" style="width: 1.5em; height: 1.5em" /><Expand v-show="isCollapse" style="width: 1.5em; height: 1.5em" /></div>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" background-color="$bg-color" active-text-color="rgb(183, 39, 255)">
      <template v-for="item in data.menuList" :key="item['menu_id']">
        <el-sub-menu v-if="hasChildren(item['children'])" :index="item['menu_id'] + ''">
          <template #title>
            <el-icon><User /></el-icon>
            <span>{{ item['menu_name'] }}</span>
          </template>

          <template v-for="ite in item['children']" :key="ite['menu_id']">
            <el-sub-menu v-if="hasChildren(ite['children'])" :index="ite['menu_id'] + ''">
              <template #title>
                <el-icon><User /></el-icon>
                <span>{{ ite['menu_name'] }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="it in ite['children']" :key="it['menu_id']" :index="it['menu_id'] + ''" @click="menuClick(it)">{{ it['menu_name'] }}</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>

            <el-menu-item-group v-else>
              <el-menu-item :index="ite['menu_id'] + ''" @click="menuClick(ite)">{{ ite['menu_name'] }}</el-menu-item>
            </el-menu-item-group>
          </template>
        </el-sub-menu>

        <el-menu-item-group v-else>
          <el-menu-item :index="item['menu_id'] + ''">{{ item['menu_name'] }}</el-menu-item>
        </el-menu-item-group>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { getMenu } from '@/api/index';
import { MenuInter } from '@/interface/state';
import { Fold, Expand, User } from '@element-plus/icons-vue';
import { ref, reactive, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

const state = useStore();

const isCollapse = ref(false);
let data = reactive({
  menuList: []
});

let hideMenu = () => {
  isCollapse.value = !isCollapse.value;
};

const hasChildren = computed(() => {
  return (arr: { [key: string]: number | string }[]) => {
    if (arr.length) {
      return true;
    } else {
      return false;
    }
  };
});

// 点击菜单调整页面
let menuClick = (item: MenuInter) => {
  state.commit('SET_MENU', item);
};

onMounted(() => {
  getMenu({})
    .then(res => {
      if (res.data.code !== 200) {
        return;
      }
      data.menuList = res.data.data;
    })
    .catch(err => {
      console.log(err);
    });
});
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
