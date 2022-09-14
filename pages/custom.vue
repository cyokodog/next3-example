<template>
  <div>
    ここは次の処置で、カスタムレイアウトを適用したページです
    <parts-code>definePageMeta({
  layout: "custom"
});</parts-code>

  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom-layout'
});
</script>

<style scoped>
</style>
