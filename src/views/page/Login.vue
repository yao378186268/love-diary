<template>
  <div class="login">
    <el-card shadow="always">
      <h3>
        <p>张</p>
        <p>文</p>
        <p>婷</p>
        <p>与</p>
        <p>姚</p>
        <p>成</p>
        <p>成</p>
      </h3>
      <el-form :model="data.userInfo">
        <el-form-item label="账号：">
          <el-input
            size="large"
            type="text"
            v-model="data.userInfo.username"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input
            size="large"
            type="password"
            v-model="data.userInfo.password"
          ></el-input>
        </el-form-item>

        <div class="btn">
          <el-button type="primary" @click="login">登 录</el-button>
          <el-button type="success">注 册</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter(); // 初始化路由实例

const data = reactive({
  userInfo: {
    username: "",
    password: "",
  },
});

let login = () => {
  router.push("/home");
};
</script>

<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgb(251, 190, 190), rgb(37, 37, 31));
  @include flex-center();

  h3 {
    text-align: center;
    padding-top: 20px;
    letter-spacing: 16px;
    font-size: 20px;

    p {
      display: inline-block;

      &:nth-child(2n) {
        transform: rotate(15deg);
        color: rgb(255, 120, 120);
      }

      &:nth-child(2n + 1) {
        transform: rotate(-15deg);
        color: rgb(20, 255, 20);
      }
    }
  }

  .el-form {
    width: 500px;
    padding: 20px 50px;
    .el-form-item {
      margin-top: 30px;

      :deep .el-form-item__label {
        line-height: 40px;
        color: $text-color;
      }
    }

    .btn {
      display: flex;
      justify-content: center;
      margin-top: 30px;
    }
  }
}
</style>
