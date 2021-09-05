<template>
  <div class="contact__wrapper">
    <div v-if="!contact.name">Loading</div>
    <div v-else class="contact__card">
      <div class="contact__top">
        <span class="material-icons"> account_circle </span>
        <div class="contact__top-info">
          <h3>{{ contact.name }}</h3>
          <span>{{ contact.role }}</span>
          <div class="contact__actions">
            <div class="contact__action">
              <Button
                :href="'mailto:' + contact.emails[0]"
                :icon="'question_answer'"
                :big="true"
                :text="'Сообщение'"
              />
            </div>

            <div class="contact__action">
              <Button :href="'tel:' + contact.phones[0]" :icon="'call'" />
            </div>

            <div class="contact__action">
              <Button :icon="'more_horiz'" />
            </div>
          </div>
        </div>
      </div>
      <div class="contact__bottom">
        <span>Биография</span>
        <div>
          <p>{{ contact.bio }}</p>
        </div>
      </div>
      <div class="contact__bottom">
        <span>Email</span>
        <div v-for="(email, index) in contact.emails" :key="index">
          {{ email }}
        </div>
      </div>
      <div class="contact__bottom">
        <span>Телефон</span>
        <div v-for="(phone, index) in contact.phones" :key="index">
          {{ phone }}
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

<style scope>
.contact__wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.contact__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
}

.contact__top {
  width: 100%;
  display: flex;
  padding-left: 100px;
  margin-bottom: 20px;
}

.contact__top > .material-icons {
  font-size: 50px;
  margin-left: 32px;
  margin-right: 25px;
}
.contact__top-info > span {
  margin-top: 5px;
}

.contact__actions {
  margin-top: 30px;
}

.contact__action a.bigBtn {
  height: 42px;
}

.contact__card .contact__action a:not(.bigBtn) {
  width: 42px;
  height: 42px;
}

.contact__action .bigBtn .material-icons {
  margin-right: 6px;
}

.contact__bottom {
  width: 100%;
  display: flex;
  margin: 20px 0;
}

.contact__bottom:first-child{
  margin-top: 40px;
}

.contact__bottom > span {
  font-size: 14px;
  line-height: 21px;
  text-align: right;
  color: #8083a3;
  width: 100px;
}

.contact__bottom> div {
  padding-left: 32px;
}
</style>
