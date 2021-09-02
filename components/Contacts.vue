<template>
  <div class="container">
    <ContactList @show="show" @clickContact="showContact" />
    <CreateContact v-if="isCreate" @close="close" />
    <Contact v-if="isContact" :id="id" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCreate: false,
      isContact: false,
      id: null
    }
  },
  async mounted() {
    await this.getContactsList()
  },
  methods: {
    async getContactsList() {
      this.$axios.setToken(this.$store.state.user.token, 'Bearer')
      const data = await this.$axios.$get('/contacts')

      if (data) {
        this.$store.commit('contacts/setContactsList', data.items)
      }
    },
   show() {
      this.isCreate = true
      this.isContact = false
    },

    close() {
      this.isCreate = false
      this.isContact = false
      this.getContactsList()
    },

    showContact(id){
      this.isContact = true
      this.id = id
    }
  },
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
}
</style>
