<template>
  <div class="contacts-top">
    <span class="material-icons avatar"> account_circle </span>
    <h3>Контакты</h3>
    <Button :icon="'person_add_alt_1'" @click="$emit('show', true)" />
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$emit('show', true)
    },
  },
}
</script>

<style>
.contacts-top {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 23px 32px;
  border-bottom: 1px solid #eceef5;
  height: auto;
  min-height: 1px;
}

.contacts-top .avatar {
  height: 40px;
  width: 40px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 32px;
}

.contacts-top a {
  margin-left: auto;
}

.contacts-top a span {
  font-size: 18px;
}
</style>
