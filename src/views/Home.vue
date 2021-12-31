<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
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
