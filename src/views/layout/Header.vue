<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
      <p>爱</p>
      <p>情</p>
      <p>日</p>
      <p>记</p>
    </div>
    <div class="user-info">
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ userInfo.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="House">首页</el-dropdown-item>
            <el-dropdown-item :icon="User">个人信息</el-dropdown-item>
            <el-dropdown-item :icon="Edit">修改密码</el-dropdown-item>
            <el-dropdown-item :icon="Close">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDown, Edit, House, User, Close } from '@element-plus/icons-vue';
import { reactive } from 'vue';
import { useStore } from 'vuex';

const state = useStore();
const userInfo = reactive({
  ...state.state.userInfo
});
</script>

<style scoped lang="scss">
.header {
  background-color: $bg-color;
  height: 50px;
  @include flex-center(space-between, center);
  padding: 0 40px;

  .logo {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      border: 2px solid #fff;
      background-color: #fff;
      border-radius: 50%;
    }

    p {
      margin-left: 12px;
      &:nth-child(2n) {
        transform: rotate(15deg);
        color: $active-color;
      }

      &:nth-child(2n + 1) {
        transform: rotate(-15deg);
        color: $active-color;
      }
    }
  }

  .user-info {
    .el-dropdown {
      color: $active-color;
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
