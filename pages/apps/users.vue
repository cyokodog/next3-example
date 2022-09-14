<template>
  <div>
    <h2>Apps Users</h2>
    <ClientOnly>
      <apps-users/>
      <template #fallback>
        <!-- Server 側でレンダリングされ Client 側で差し替えられる -->
        <p>loading...</p>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup>

</script>

<style scoped>
</style>
