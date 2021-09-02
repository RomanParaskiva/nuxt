<template>
  <h1>{{}slug}</h1>
</template>

<script>
export default {
     asyncData({ params }) {
      const id = params.id // When calling /abc the slug will be "abc"
      return { id }
    }
  }
</script>

<style>

</style>