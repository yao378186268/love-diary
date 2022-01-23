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
            <el-dropdown-item :icon="House" @click="goHome">首页</el-dropdown-item>
            <el-dropdown-item :icon="User" @click="goUserInfo">个人信息</el-dropdown-item>
            <el-dropdown-item :icon="Edit" @click="goPassword">修改密码</el-dropdown-item>
            <el-dropdown-item :icon="Close" @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDown, Edit, House, User, Close } from '@element-plus/icons-vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ElMessageBox, ElMessage } from 'element-plus';
import { MenuInter } from '@/interface/state';

const state = useStore();
const router = useRouter();

const userInfo = reactive({
  ...state.state.userInfo
});

const goHome = () => {
  router.push('/index');
};

const goUserInfo = () => {
  let menu: MenuInter = {
    menu_id: 999,
    menu_path: '/userinfo',
    menu_name: '个人信息',
    menu_type: ''
  };
  state.commit('SET_MENU', menu);
  router.push('/userinfo');
};

const goPassword = () => {
  let menu: MenuInter = {
    menu_id: 888,
    menu_path: '/password',
    menu_name: '修改密码',
    menu_type: ''
  };
  state.commit('SET_MENU', menu);
  router.push('/password');
};

const logout = () => {
  ElMessageBox.confirm('确定要退出登陆吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      sessionStorage.clear();
      router.push('/login');
      state.commit('CLEARLOGOUT');
      console.log(state.state, 1111);
      ElMessage({
        type: 'success',
        message: '退出登陆'
      });
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消退出'
      });
    });
};
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
