export const state = () => ({
 queryParams: {
  sortBy : 'name',
  sortDir: 'asc',
  page: 1,
  perPage: 10
 }
})

export const mutations = {
  setSearch(state, obj) {
    for (const [key, value] in obj){
      state[key] = value
    }
  }
}