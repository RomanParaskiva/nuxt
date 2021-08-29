<template>
  <div>
    <header>
      <a href="/" @click="logout">Log out</a>
    </header>
    <Nuxt/>
  </div>
</template>

<script>
export default {
  methods: {
    logout(){
      this.$store.commit('user/setAuth', '')
      localStorage.removeItem('user')
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>