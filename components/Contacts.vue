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
  methods: {
   show() {
      this.isCreate = true
      this.isContact = false
    },

    close() {
      this.isCreate = false
      this.isContact = false
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
