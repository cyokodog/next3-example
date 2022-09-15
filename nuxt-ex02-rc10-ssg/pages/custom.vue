<template>
  <div class="customPage">
    ここはカスタムレイアウトを適用したページです
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom'
});
</script>


<style scoped>
  .customPage{
    padding:100px;
    background-color: white;;
  }
</style>
