<template>
  <div>
    <NuxtLink to="/blog">
      <p>Back to Posts</p>
    </NuxtLink>
    <demo-quote/>
    <article>
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </article>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'blog'
  });
  const route = useRoute();
  const { data: post } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, { pick: ['title', 'body'] })

</script>
