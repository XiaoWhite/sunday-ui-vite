<script lang="ts" setup>
import { ref } from 'vue';

const msg = ref('hello');
</script>
<template>
  <div class="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<style scoped lang="scss">
.app {
  color: red;
}
</style>
