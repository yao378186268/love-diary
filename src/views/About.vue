<template>
  <div class="">about</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    console.log(111111);
  },
  created() {
    console.log(2222222);
  },
  setup(props, context) {
    console.log(props, context);
  },
});
</script>
