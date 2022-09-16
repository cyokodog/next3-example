<template>
  <div>
    <NuxtLink to="/blog">
      <p>Back to Blog Top</p>
    </NuxtLink>
    <article>
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </article>
  </div>
</template>

<script setup>
  const route = useRoute();
  const { data: post } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, { pick: ['title', 'body'] })

</script>
