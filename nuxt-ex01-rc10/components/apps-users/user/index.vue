<template>
  <div v-if="pending">loading...</div>
  <parts-code v-else>{{user}}</parts-code>
</template>

<style scoped>
</style>

<script src="./main.ts"></script>
