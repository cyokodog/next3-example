<script setup>
definePageMeta({
  layout: 'blog'
});
const { data: posts } = await useFetch('https://jsonplaceholder.typicode.com/posts')
</script>

<template>
  <div>
    <article v-for="post in posts" :key="post.id">
      <NuxtLink :to="`/blog/post-${post.id}`">
        <h2>{{ post.title }}</h2>
      </NuxtLink>
      <p>{{ post.body }}...</p>
    </article>
  </div>
</template>
