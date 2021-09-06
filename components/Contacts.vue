<template>
  <div class="container">
    <ContactList @show="show" @clickContact="showContact" />
    <CreateContact v-if="isCreate" @close="close" />
    <Contact v-if="isContact" :id="id" />
  </div>
</template>

<script>
import { collection, getDocs } from 'firebase/firestore'
import {db} from '~/plugins/firebase'

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
      const data = await getDocs(collection(db, 'contacts'))
      data.forEach((doc) => {
        console.log(doc)
      })
      // if (data) {
      //   this.$store.commit('contacts/setContactsList', data.items)
      // }
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
  width: 100%;
  display: flex;
}
</style>
