<script setup>
  const { counter, increment, decrement, counterDouble } = useCounter()
</script>

<template>
  <div>
    <p><span>Counter:</span> {{ counter }} x 2 = {{ counterDouble }}</p>
    <button @click="increment">+ Increment</button>
    <button @click="decrement">- Decrement</button>
  </div>
</template>
