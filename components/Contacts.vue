<template>
  <div>
    <h1>contacts</h1>
    <ContactList />
  </div>
</template>

<script>
export default {
  async mounted() {
    this.$axios.setToken(this.$store.state.user.token, 'Bearer')
    const data = await this.$axios.$get('/contacts')

    if (data) {
      this.$store.commit('contacts/setContactsList', data.items)
    }
    console.log(data)
  },
}
</script>

<style></style>
