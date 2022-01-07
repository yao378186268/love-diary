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
      <el-form :model="userInfo" :rules="rules" ref="formRef">
        <el-form-item label="账号：" prop="username">
          <el-input size="large" type="text" v-model="userInfo.username"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input size="large" type="password" v-model="userInfo.password"></el-input>
        </el-form-item>

        <div class="btn">
          <el-button type="primary" @click="submitForm(formRef)">登 录</el-button>
          <el-button type="success">注 册</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { login } from '@/api/login';

import { ElMessage } from 'element-plus';
import type { ElForm } from 'element-plus';

const router = useRouter(); // 初始化路由实例
const state = useStore(); // 初始化vuex实例

// 登录信息
const userInfo = reactive({
  username: '姚成成',
  password: 'zwt123456'
});

const formRef = ref<InstanceType<typeof ElForm>>();

const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度最低6位', trigger: 'blur' }
  ]
});

let submitForm = (formEl: InstanceType<typeof ElForm> | undefined) => {
  formEl?.validate(valid => {
    if (!valid) {
      ElMessage.error('请正确填写用户信息');
      return;
    }
    login(userInfo).then(res => {
      if (res.data.code !== 200) {
        ElMessage.error(res.data.msg);
        return;
      }
      state.commit('SET_USERINFO', res.data.data[0]);
      ElMessage.success(res.data.msg);
      router.push('/index');
    });
  });
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
