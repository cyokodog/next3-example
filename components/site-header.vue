<template>
  <div class="header">
    <ul>
      <li>
        <NuxtLink to="/">Index</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .header {
    padding: 20px;
    color: #fff;
    background-color: black;
  }
  .header ul {
    display: flex;
    padding:0;
    margin:0;
    gap: 10px;
  }
  .header li {
    list-style: none;

  }
  .header a {
    color:#fff
  }
</style>
