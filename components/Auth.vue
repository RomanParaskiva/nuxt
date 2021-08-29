<template>
  <form @submit.prevent="userLogin">
    <h2>Добро пожаловать</h2>
    <span>в</span>
    <h3>Yallow Page</h3>

    <div class="input-wrapper">
      <label for="email"> Email </label>
      <input v-model="email" type="email" name="email" required />
    </div>
    <div class="input-wrapper">
      <label for="password"> Password </label>
      <input v-model="password" type="password" name="password" required />
    </div>

    <button type="submit">Войти</button>
  </form>
</template>

<script>
export default {
  data() {
      return {
        email: '',
        password: '',
      }
  },
  mounted() {
  },
  methods: {
    async userLogin() {
      
      if (this.email && this.password){
      const res = await this.$axios.$post('/sing-in', {
          email: this.email,
          password: this.password
      })

      if(res.access_token){
       await this.$store.commit('user/setAuth', res.access_token)
       this.$axios.setToken( res.access_token, 'Bearer')
       localStorage.setItem('user', JSON.stringify({token: res.access_token}))
       this.$router.push('/')
      }
      
    }
    }
  }
}
</script>

<style></style>
