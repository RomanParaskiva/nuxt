<template>
  <a
    :class="[{ bigBtn: big }]"
    :href="href ? href : '#'"
    @click="$emit('click')"
  >
    <span v-if="icon" class="material-icons"> {{ icon }} </span>
    {{ text && text }}
  </a>
</template>

<script>
export default {
  props: ['href', 'icon', 'text', 'big'],
  methods: {
    callback() {
      return this.cb && this.$emit('click', this)
    },
  },
}
</script>

<style>
a {
  width: 36px;
  height: 36px;
  background-color: #fff;
  border: 1px solid #eceef5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: 0.3s ease;
}

a.bigBtn {
  width: max-content;
  background: #6b59cc;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  padding: 11px 13px;
  font-weight: bold;
}

a.bigBtn .material-icons {
  color: #fff;
}

a .material-icons {
  font-size: 18px;
  color: #8083a3;
  transition: 0.3s ease;
}

a:hover {
  background-color: rgba(77, 76, 172, 0.1);
}

a:hover .material-icons {
  color: #6b59cc;
}
</style>
