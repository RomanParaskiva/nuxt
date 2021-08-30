<template>
  <div class="navbar">
    <header>
      <a v-if="handleAuth" href="/" @click="logout">Log out</a>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    handleAuth() {
      return this.$store.state.user.token
    },
  },
  methods: {
    logout() {
      this.$store.commit('user/setAuth', '')
      localStorage.removeItem('user')
    },
  },
}
</script>

<style>
.navbar {
  width: 100%;
  padding: 0 32px;
  border-bottom: 1px solid #eceef5;
}

header {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

header a {
  width: unset;
  height: unset;
  text-decoration: none;
  color: #6b59cc;
  font-weight: 100;
  text-transform: lowercase;
  letter-spacing: 0.03em;
  border: 1px solid #6b59cc;
  border-radius: 8px;
  padding: 5px 8px;
  transition: all 0.3s ease;
}

header a:hover {
  color: #fff;
  background-color: #6b59cc;
}
</style>