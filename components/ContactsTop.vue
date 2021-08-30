<template>
  <div class="contacts-top">
    <span class="material-icons avatar"> account_circle </span>
    <h3>Контакты</h3>
    <a href="#">
      <span class="material-icons"> person_add_alt_1 </span>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style>
.contacts-top {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 23px 32px;
  border-bottom: 1px solid #ECEEF5;
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

.contacts-top h3 {
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  color: #1a1c1d;
}

.contacts-top a {
 margin-left: auto;
}

.contacts-top a span{
  font-size: 18px;
}
</style>