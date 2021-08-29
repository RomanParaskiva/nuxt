<template>
  <div>
    <ul v-for="(item, index) in getList" v-bind:key="index">
      <li>
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    getList() {
      return this.$store.state.contacts.contactsList
    },
  },
}
</script>

<style></style>
