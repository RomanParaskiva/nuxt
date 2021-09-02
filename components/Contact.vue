<template>
  <div class="container">
       <div v-if="!contact.name">Loading</div>
    <div v-else class="contact__wrapper">
      <div class="contact__top">
        <span class="material-icons"> account_circle </span>
        <div class="contact__top-info">
          <h3>{{ contact.name }}</h3>
          <span>{{ contact.role }}</span>
          <div class="contact__actions">
            <div class="contact__action">
              <a :href="'mailto:' + contact.emails[0]">
                <span class="material-icons"> question_answer </span>
              </a>
            </div>

            <div class="contact__action">
              <a :href="'tel:' + contact.phones[0]">
                <span class="material-icons"> call </span>
              </a>
            </div>

            <div class="contact__action">
              <a href="#">
                <span class="material-icons"> more_horiz </span>
              </a>
            </div>
          </div>
        </div>
        <div class="contact__bio">
          <div class="left">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      contact: {},
    }
  },
  watch: {
    async id() {
      await this.getInfo()
    },
  },
  async mounted() {
    await this.getInfo()
  },
  methods: {
    async getInfo() {
      this.contact = await this.$axios.$get(
        `/contacts/${this.$options.propsData.id}`
      )
      console.log(this.contact)
    },
  },
}
</script>

<style>
</style>