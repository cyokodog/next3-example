<template>
  <div>
    <site-header />
    <div class="body">
      <slot />
    </div>
    <site-footer />
  </div>
</template>
<style scoped>
  .body {
    padding: 20px;
    min-height: 300px;
    background-color:#fff
  }
</style>
