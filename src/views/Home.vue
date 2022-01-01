<template>
  <div class="home">
    <el-button type="primary" @click="back">返回</el-button>
    <el-button type="primary" @click="goAbout">关于我们</el-button>

    <el-input v-model="str" @input="input"></el-input>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Home extends Vue {
  str = "姚成成";

  input(): void {
    console.log(this.str);
  }

  back(): void {
    this.$router.go(-1);
  }

  goAbout(): void {
    console.log(this);

    this.$router.push("/about");
  }

  created(): void {
    console.log(this.str);
  }
}
</script>

<style lang="scss" scoped>
.home {
  .el-input {
    width: 200px;
    margin-left: 20px;
  }
}
</style>
