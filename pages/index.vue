<template>
  <div class="content__wrapper">
    <Auth v-if="!isAuth" />
    <Contacts v-else />
  </div>
</template>

<script>
import Contacts from '../components/Contacts.vue'
export default {
  components: { Contacts },
  computed: {
    isAuth() {
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

<style>
.content__wrapper{
  height: calc(100vh - 50px);
}
</style>
