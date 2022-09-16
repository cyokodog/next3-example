<template>
  <div>
    <site-header />
    <div class="blog-header">BLOG</div>
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
  .blog-header {
    padding: 20px;
    background: green;
    color:white;
  }
</style>
