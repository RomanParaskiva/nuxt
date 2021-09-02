<template>
  <div class="create-form__wrapper">
    <div class="close" @click="$emit('close')">
      <span class="material-icons"> close </span>
    </div>

    <form class="create-contact__form" @submit.prevent="addContact">
      <h2>Добавить контакт</h2>
      <div class="input-wrapper">
        <label for="email"> Имя </label>
        <input
          v-model="name"
          type="text"
          name="name"
          placeholder="Имя"
          required
        />
      </div>

      <div class="input-wrapper">
        <label for="role"> Должность </label>
        <input
          v-model="role"
          type="text"
          name="role"
          placeholder="Должность"
          required
        />
      </div>

      <div class="input-wrapper">
        <label for="email"> Email </label>
        <input
          v-model="email"
          type="email"
          name="email"
          placeholder="mycoolemail@site.com"
          required
        />
      </div>

      <div class="input-wrapper">
        <label for="phone"> Телефон </label>
        <input
          v-model="phone"
          type="tel"
          name="phone"
          placeholder="+X XXX XXX XX XX"
          required
        />
      </div>

      <div class="input-wrapper">
        <label for="bio"> Биография </label>
        <textarea v-model="bio" name="bio" rows="5" />
      </div>

      <button type="submit">Добавить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      role: '',
      phone: '',
      bio: '',
    }
  },

  methods: {
    async addContact() {
      if (
        this.name.length > 0 &&
        this.email.length > 0 &&
        this.role.length > 0 &&
        this.phone.length > 0
      ) {
        const res = await this.$axios.$post('/contacts', {
          name: this.name,
          role: this.role,
          bio: this.bio,
          phones: [this.phone],
          emails: [this.email],
        })
        
        if (res._id) {
          this.name = ''
          this.email = ''
          this.role = ''
          this.phone = ''
          this.bio = ''
          this.$emit('close')
        }
      }
    },
  },
}
</script>

<style>
.create-form__wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 3rem;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.create-form__wrapper h2 {
  text-align: left;
  width: 100%;
  margin-bottom: 20px;
}

.create-contact__form {
  width: 100%;
  height: auto;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.create-contact__form .input-wrapper {
  margin-bottom: 10px;
}

.create-contact__form input {
  width: 300px;
}

.create-contact__form textarea {
  border: 1px solid #6b59cc;
  background: transparent;
  border-radius: 8px;
  padding: 10px 15px;
  resize: none;
}

.create-contact__form button {
  margin-left: auto;
}
</style>