<script lang="ts" setup>
import { ref } from 'vue';

const msg = ref('hello');
</script>
<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <SButton color="blue" size="large">蓝色按钮</SButton>
    <SButton color="green" size="small">绿色按钮</SButton>
    <SButton color="gray">灰色按钮</SButton>
    <SButton color="yellow">黄色按钮</SButton>
    <SButton color="red">红色按钮</SButton>

    <SButton color="blue" round plain icon="search"></SButton>
    <SButton color="green" round plain icon="edit"></SButton>
    <SButton color="gray" round plain icon="check"></SButton>
    <SButton color="yellow" round plain icon="message"></SButton>
    <SButton color="red" round plain icon="delete"></SButton>
  </div>
</template>

<style scoped lang="scss">
.app {
  color: red;
}
</style>
