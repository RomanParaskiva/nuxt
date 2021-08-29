<template>
  <div>
    <Auth v-if="!handleAuth" />
    <Contacts v-else />
  </div>
</template>

<script>
import Contacts from '../components/Contacts.vue'
export default {
  components: { Contacts },
  computed: {
    handleAuth() {
      return this.$store.state.user.token
    },
  },
  async mounted() {
    if (localStorage.user) {
      const token = await JSON.parse(localStorage.getItem('user')).token
      await this.$store.commit('user/setAuth', token)
    } else {
      this.$store.commit('user/setAuth', '')
    }
  },
}
</script>
