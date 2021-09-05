<template>
  <div class="contact-list__wrapper">
    <ContactsTop @show="$emit('show', true)" />
    <div class="search">
      <label>Поиск контакта</label>
      <div class="input-wrapper">
        <input
          id="search"
          v-model="search"
          type="text"
          name="search"
          placeholder="Имя, адрес электронной почты или номер "
          @input="handleSearch"
        />
        <span v-show="!search" class="material-icons"> search </span>
        <span v-show="search" class="material-icons" @click="clearSearch">
          cancel
        </span>
      </div>
    </div>
    <div class="role-switcher">
      <div class="swither__wrapper">
        <span>{{ switcherSortBy }}</span>
        <div class="sort-dir">
          <span
            :class="switcherSortDir === 'asc' ? 'active' : ''"
            class="material-icons"
          >
            expand_less
          </span>
          <span
            :class="switcherSortDir !== 'asc' ? 'active' : ''"
            class="material-icons"
          >
            expand_more
          </span>
        </div>
        <div class="switcher">
          <div>
            <span @click="handleQueryParams('sortBy', 'name')">Имя</span>
            <div class="sort-dir">
              <span
                data-sortdir="asc"
                :class="switcherSortDir === 'asc' ? 'active' : ''"
                class="material-icons"
                @click="handleQueryParams('sortDir', 'asc')"
              >
                expand_less
              </span>
              <span
                data-sortdir="desc"
                :class="switcherSortDir !== 'asc' ? 'active' : ''"
                class="material-icons"
                @click="handleQueryParams('sortDir', 'desc')"
              >
                expand_more
              </span>
            </div>
          </div>
          <div>
            <span @click="handleQueryParams('sortBy', 'role')">Должность</span>
            <div class="sort-dir">
              <span
                data-sortdir="asc"
                :class="switcherSortDir === 'asc' ? 'active' : ''"
                class="material-icons"
                @click="handleQueryParams('sortDir', 'asc')"
              >
                expand_less
              </span>
              <span
                data-sortdir="desc"
                :class="switcherSortDir !== 'asc' ? 'active' : ''"
                class="material-icons"
                @click="handleQueryParams('sortDir', 'desc')"
              >
                expand_more
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list-wrapper">
      <ul>
        <li
          v-for="(contact, index) in getList"
          :id="contact._id"
          :key="index"
          @click="$emit('clickContact', contact._id)"
        >
          <div class="wrapper">
            <span class="material-icons"> account_circle </span>
            <div class="contact__info">
              <span class="name">{{ contact.name }}</span>
              <span class="role">{{ contact.role }}</span>
            </div>
            <div class="contact__actions">
              <div class="contact__action">
                <Button
                  :href="'mailto:' + contact.emails[0]"
                  :icon="'question_answer'"
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
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryParams: {
        sortBy: 'name',
        sortDir: 'asc',
        page: 1,
        perPage: 10,
      },
      search: '',
      switcherSortBy: 'Имя',
      switcherSortDir: 'asc',
    }
  },
  computed: {
    getList() {
      return this.$store.state.contacts.contactsList
    },
  },
  methods: {
    async handleSearch() {
      if (this.search.length > 3 || this.search === '') {
        const res = await this.$axios.$get(`/contacts?search=${this.search}`, {
          params: this.queryParams,
        })

        await this.$store.commit('contacts/setContactsList', res.items)
      }
    },

    clearSearch() {
      this.search = ''
      this.handleSearch()
    },

    async handleQueryParams(key, value) {
      if (key === 'sortBy') {
        this.queryParams.sortBy = value
        this.switcherSortBy = value === 'name' ? 'Имя' : 'Должность'
      }

      if (key === 'sortDir') {
        this.queryParams.sortDir = value
        this.switcherSortDir = value
      }

      await this.handleSearch()
    },
  },
}
</script>

<style scope>
.contact-list__wrapper {
  width: 100%;
  height: 100%;
  max-width: 35%;
  background-color: #faf9ff;
  border-right: 1px solid #eceef5;
  display: flex;
  flex-direction: column;
}

.search {
  display: flex;
  flex-direction: column;
  padding: 23px 32px;
  height: auto;
  min-height: 1px;
}

.search label {
  width: 100%;
  color: #8083a3;
}

.search .input-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.search input {
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  color: #1a1c1d;
  background-color: transparent;
  border: none;
  width: 100%;
}

.search input::placeholder {
  color: #1a1c1d;
}
.list-wrapper {
  height: 100%;
  overflow-y: auto;
}
.list-wrapper ul {
  list-style: none;
  padding-left: 0;
}

.list-wrapper ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.list-wrapper li .wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 14px 32px;
}

.list-wrapper li .wrapper > span {
  font-size: 30px;
  margin-right: 18px;
}

.contact__info {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  color: #1a1c1d;
}

.role {
  font-size: 14px;
  line-height: 21px;
  color: #8083a3;
}

.contact__actions {
  display: flex;
  margin-left: auto;
}

.contact__action:not(:last-child) {
  margin-right: 6px;
}

.role-switcher {
  height: auto;
  min-height: 1px;
}

.swither__wrapper {
  width: 100%;
  padding: 15px 32px;
  display: flex;
  align-items: center;
  position: relative;
}

.swither__wrapper > span,
.swither__wrapper .switcher > div > span {
  font-size: 14px;
  line-height: 21px;
  color: #8083a3;
  margin-right: 20px;
}

.swither__wrapper .sort-dir {
  display: flex;
  flex-direction: column;
}

.swither__wrapper .sort-dir .material-icons {
  font-size: 18px;
  line-height: 8px;
  color: #8083a3;
  opacity: 0.4;
  position: relative;
  z-index: 100;
}

.swither__wrapper .sort-dir > span.active {
  opacity: 1;
  z-index: 1;
}

.swither__wrapper .switcher {
  background: #ffffff;
  border: 1px solid #eceef5;
  border-radius: 10px;
  padding: 8px 14px;
}

.swither__wrapper .switcher > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;
}

.swither__wrapper .switcher {
  display: none;
  width: 150px;
  opacity: 0;
  transition: 0.4s ease;
}

.swither__wrapper:hover .switcher {
  display: block;
  opacity: 1;
  position: absolute;
  bottom: -100%;
  left: 24px;
}

.swither__wrapper .switcher > div > .sort-dir {
  display: none;
  opacity: 0;
  transition: 0.4s ease;
}

.swither__wrapper .switcher > div:hover > .sort-dir {
  display: flex;
  opacity: 1;
}
</style>
