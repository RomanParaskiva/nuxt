<template>
  <div class="form__wrapper">
    <form @submit.prevent="userRegister">
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
  </div>
</template>

<script>
import { doc, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { db, auth } from '~/plugins/firebase.js'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  mounted() {},
  methods: {
    userLogin() {
      // const auth = require('firebase/auth')
      console.log(this.$fire)
      // if (this.email && this.password){
      // const res = await auth.createUserWithEmailAndPassword( {
      //     email: this.email,
      //     password: this.password
      // })

      // console.log(res)

      // if(res.access_token){
      //  await this.$store.commit('user/setAuth', res.access_token)
      //  this.$axios.setToken( res.access_token, 'Bearer')
      //  localStorage.setItem('user', JSON.stringify({token: res.access_token}))
      //  this.$router.push('/')
      // }

      // }
    },
    async writeToFirestore() {
      const ref = doc(db, 'testCollection', 'testDoc')
      const document = {
        text: 'Firebase 9 rocks!',
      }
      try {
        await setDoc(ref, document)
        alert('Success!')
      } catch (e) {
        alert('Error!')
        console.error(e)
      }
    },

    async userRegister() {
      try {
        const credits = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        )

      if(credits.user.accessToken){
        this.$store.commit('user/setAuth', credits.user.accessToken)
        localStorage.setItem('user', JSON.stringify({token: credits.user.accessToken}))
       this.$router.push('/')
      } else {
        console.log(credits)
      }
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style>
.form__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 50px);
}

form {
  padding: 2rem;
  background-color: #faf9ff;
  border-radius: 10px;
  text-align: center;
}

form h3 {
  margin-bottom: 1rem;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
}

.input-wrapper label {
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 100;
  color: #6b59cc;
}

.input-wrapper input {
  padding: 10px 15px;
  background-color: transparent;
  border: 1px solid #6b59cc;
  border-radius: 8px;
}

button {
  color: #fff;
  background-color: #6b59cc;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  margin-top: 15px;
  text-transform: uppercase;
  font-size: 10px;
}
</style>
